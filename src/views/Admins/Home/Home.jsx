import React from 'react'
import useViewModel from './HomeViewModel'
import Chart from 'react-apexcharts';
import DashboardCard from '../../../components/DashboardCard';
import { Timer , UserRound , MoveUpRight } from 'lucide-react'
import Loader from '../../../components/Loader'

export default function Home() {

    const { loading, data , admin} = useViewModel();

    const options = {
        // colors: ['#FFC577'],
        plotOptions: {
            bar: {
                borderRadius: 10,
                distributed: true,
            }
        },
        xaxis: {
            categories: data?.numberOfStudentsPerCourse?.map((e) => e.name)
        }
    }

    const series = [{
        name: "Persons",
        data: data?.numberOfStudentsPerCourse?.map((e) => e.numberOfStudents)
    }]

    if(loading) return <Loader/>
    return (
        <div className='flex flex-col justify-center gap-24 items-center min-h-screen'>

            <h1 className='text-3xl font-bold'>Welcome to the Dashboard, {admin?.name.split(" ")[0]} 🎉❤️</h1>

            <div className='flex w-full lg:flex-row flex-col max-w-full md:max-w-screen-sm lg:max-w-screen-2xl gap-10'>
                <DashboardCard Icon={UserRound} text={"Users"} number={data?.userCount ?? 0} />
                <DashboardCard Icon={Timer} text={"Pending"} number={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data?.totalPriceOfPendingRequests ?? 0)} />
                <DashboardCard Icon={MoveUpRight} text={"Earnings"} number={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data?.totalPrices ?? 0)} />
            </div>

            <div className='w-full'>
                <h1 className='text-2xl font-bold mb-4 border-b-2'>Courses</h1>
                <Chart options={options} series={series} type="bar" height={400} className="w-full" />
            </div>

        </div>
    )
}
