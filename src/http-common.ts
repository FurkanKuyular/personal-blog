import axios, { AxiosInstance } from "axios";

let xIp = '';

// @ts-ignore
const response = await axios
    .get('http://api.ipify.org?format=json')
    .then(response => {
        xIp = response.data.ip;
    });

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://0.0.0.0/api',
    headers: {
        "Content-type": "application/json",
        "X-IP": xIp,
    },
});

export default apiClient;
