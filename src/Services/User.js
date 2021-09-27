import axios from 'axios';


  export const  login = (data)=> {
         return axios.post("http://localhost:4000/login",data)}

   export const register = (details)=> {
        return axios.post("http://localhost:4000/register",details)}

