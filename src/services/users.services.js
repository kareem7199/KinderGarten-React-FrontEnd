import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";

const userService = axios.create({
    baseURL: `${API_ENDPOINT}/users`,
});

const errorHandler = (err) => {
    console.log(err);
    throw err;
};

export default {
    async signin(email, password) {
        try {
            const response = await userService.post(
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
    async getUsers(auth) {
        try {
            const response = await userService.get(
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
    async deleteUser(id, auth) {
        try {
            const response = await userService.delete(
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
    async createNewTeacher(data, auth) {
        try {
            const response = await teacherService.post(
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
    async getUser(id , auth) {
        try {
            const response = await userService.get(
                `/${id} ` ,
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
