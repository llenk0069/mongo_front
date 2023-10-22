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
export const userServices = {
    login: async ()=>{
        const loginData = await AppIntance.post<loginData>('http://127.0.0.1:3001/login',{
            name:"test",
            password:"test"})
            localStorage.setItem('accessToken', loginData.data.accessToken)
            
        return loginData
    },
    getUsers: async ()=>{
        const users = await AppIntance.get('http://127.0.0.1:3001/allUsers')
        return users
    }
} 
