import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";

const courseService = axios.create({
    baseURL: `${API_ENDPOINT}/courses`,
});

const errorHandler = (err) => {
    console.log(err);
    throw err;
};

export default {
    async getAllCourses(auth) {
        try {
            const response = await courseService.get(
                "/",
                {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                }
            );
            return response;
        } catch (err) {
            errorHandler(err);
        }
    } ,
    async deleteCourse(id, auth) {
        try {
            const response = await courseService.delete(
                `/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                }
            );
            return response;
        } catch (err) {
            errorHandler(err);
        }
    },
    async createNewCourse(data, auth) {
        try {
            const response = await courseService.post(
                `/`,
                data, 
                {
                    headers: {
                        Authorization: `Bearer ${auth}`,
                    },
                }
            );
            return response;
        } catch (err) {
            errorHandler(err);
        }
    },
    
};
