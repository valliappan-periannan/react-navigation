import axios from "axios";
import { API_KEY } from "./keys";


const apiClient = axios.create({
    baseURL:'https://newsapi.org',
    timeout:10000,
    headers:{
        'Content-Type':'application/json',
    }
})

apiClient.interceptors.request.use(config=>{
    config.params.apiKey = API_KEY
    return config;
}, error=>{
    return Promise.reject(error);
});


export default apiClient;