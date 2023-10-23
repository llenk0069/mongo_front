import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { config } from "process";
import { userServices } from "./user-services";


const baseURL = process.env.NODE_ENV === "development"
  ? "http://127.0.0.1:3333/"
  : "http://example.com"


const AppIntance:AxiosInstance = axios.create({
    baseURL,
    withCredentials:true
})

AppIntance.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken){
        config.headers.Authorization = 'Bearer ' + accessToken
      }
    return config
})

AppIntance.interceptors.response.use((res:AxiosResponse)=>{
    return res},
    async(error)=>{
        const originalConfig = error.config
        if(error.response.status == 401){
            console.log('пользователь не авторизирован, trying to refresh')
            try{
                await userServices.refresh()
                return AppIntance.request(originalConfig)
            }catch(e){
                console.log('Пользователь не Авторизирован!!!')
                
            }
        }
    }
    )

export default AppIntance