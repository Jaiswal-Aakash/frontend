import axios from "axios";

// Use the correct environment variable for API URL
const url = process.env.NEXT_PUBLIC_API_URL || "https://api.lhome.co.in/api";

const AxiosService = axios.create({
    baseURL : url,
    headers : {
        'Content-Type' : 'application/json'
    }
});

AxiosService.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

AxiosService.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export { AxiosService };