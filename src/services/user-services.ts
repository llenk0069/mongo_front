import axios from "axios";
import AppIntance from "./axios";

type userDto = {
    age: number
    email?: string
    _id : number
    name: string
}
type loginData = {
    userDto: userDto
    accessToken:string
    refreshToken:string
}
type refreshData = {
    userDto: userDto
    accessToken:string
    refreshToken:string
}
export const userServices = {
    login: async (name:string, password:string)=>{
        const loginData = await AppIntance.post<loginData>('http://127.0.0.1:3001/login',{
            name,
            password})
            localStorage.setItem('accessToken', loginData.data.accessToken)
            
        return loginData
    },
    refresh: async ()=>{
        const refreshData = await AppIntance.get<refreshData>('http://127.0.0.1:3001/refresh')
        localStorage.setItem('accessToken', refreshData.data.accessToken)
        return refreshData
    },
    getUsers: async ()=>{
        const users = await AppIntance.get('http://127.0.0.1:3001/allUsers')
        return users
    }
} 
