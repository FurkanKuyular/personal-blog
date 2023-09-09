import axios, { AxiosInstance } from "axios";

let xIp = '';

// @ts-ignore
let xIpUrl = import.meta.env.VITE_APP_XIP_URL;

// @ts-ignore
const response = await axios
    .get(xIpUrl)
    .then(response => {
        xIp = response.data.ip;
    });

    // @ts-ignore
    let apiUrl = import.meta.env.VITE_APP_API_URL;

const apiClient: AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-type": "application/json",
        "X-IP": xIp,
    },
});

export default apiClient;
