import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000"
})

export const setAuthToken = (token?: string) => {
    if(token){
        api.defaults.headers.common.Authorization = token
    }else{
        delete api.defaults.headers.common.Authorization
    }
}