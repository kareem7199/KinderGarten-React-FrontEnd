import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";

const adminService = axios.create({
    baseURL: `${API_ENDPOINT}/admins`,
});

const errorHandler = (err) => {
    console.log(err);
    throw err;
};

export default {
    async signin(email, password) {
        try {
            const response = await adminService.post(
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
    async getAdmins(auth) {
        try {
            const response = await adminService.get(
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
    async getStat(auth) {
        try {
            const response = await adminService.get(
                "/stat",
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
    async deleteAdmin(id, auth) {
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
    } ,
    async createNewAdmin(data, auth) {
        try {
            const response = await adminService.post(
                "/",
                data, // Pass the data here
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
