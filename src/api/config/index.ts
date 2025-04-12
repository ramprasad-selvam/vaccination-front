// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "http://localhost:4000/api/v1";

import axios from "axios";
import { store } from "../../redux/store";

const API = axios.create({
    baseURL : BASE_URL,
})

API.interceptors.request.use(
    (config) => {
        const state = store.getState()
        const token = state.auth.token;
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers.Accept = 'Encoding'
        return config;
    },
    (error) => Promise.reject(error)
);

export default API;