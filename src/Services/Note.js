import axios from 'axios';

  export const  createNote = (data)=> {
    const token = localStorage.getItem('token')
    console.log(token);
         return axios.post("http://localhost:4000/createNotes",data,{ headers: {"Authorization" : `Bearer ${token}`} })}