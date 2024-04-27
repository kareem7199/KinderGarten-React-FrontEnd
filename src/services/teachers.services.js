import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";

const teacherService = axios.create({
    baseURL: `${API_ENDPOINT}/teachers`,
});

const errorHandler = (err) => {
    console.log(err);
    throw err;
};

export default {
    async signin(email, password) {
        try {
            const response = await teacherService.post(
                "/login",
                {
                    email,
                    password,
                }
            );
            return response;
        } catch (err) {
            errorHandler(err);
        }
    },
    async getTeachers(auth) {
        try {
            const response = await teacherService.get(
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
    },
    async deleteTeacher(id, auth) {
        try {
            const response = await adminService.delete(
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
    }
};
