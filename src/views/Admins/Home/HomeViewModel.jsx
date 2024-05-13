import React , {useState , useEffect} from 'react'
import { jwtDecode } from 'jwt-decode'
import { authState } from '../../../recoil';
import { useRecoilState } from 'recoil';
import adminsServices from '../../../services/admins.services';
import { toast } from 'react-toastify';
export default function HomeViewModel() {
    const [token, setToken] = useRecoilState(authState);
    const [data , setData] = useState();
    const [admin , setAdmin] = useState();
    const [loading , setLoading] = useState(true);

    const fetchStat = async () => {
        try {
            
            const response = await adminsServices.getStat(token);
            setData(response.data.data);
            setLoading(false);

        } catch (error) {
            toast.error("An error occurred");
        }
    }
    useEffect(() => {
        const decoded = jwtDecode(token);
        setAdmin(decoded);

        fetchStat();

    }, [token])
  
    return {
        loading ,
        data,
        admin
  }
}
