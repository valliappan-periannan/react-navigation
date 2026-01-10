import axios from "axios";
import { API_KEY } from "./keys";
import { store } from "../store/store";


const apiClient = axios.create({
    baseURL:'https://newsapi.org',
    timeout:10000,
    headers:{
        'Content-Type':'application/json',
    }
})

apiClient.interceptors.request.use(config=>{
    console.log('-=---=',API_KEY, store.getState().user);
    
    config.params.apiKey = API_KEY
    return config;
}, error=>{
    return Promise.reject(error);
});


export default apiClient;