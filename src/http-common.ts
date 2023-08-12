import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://0.0.0.0/api',
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;
