import axios from 'axios';

  export const  createNote = (data)=> {
    const token = localStorage.getItem('token')
    console.log(token);
         return axios.post("http://localhost:4000/createNotes",data,{ headers: {"Authorization" : `Bearer ${token}`} })}
  

  export const getNote=(id)=>{
    const token=localStorage.getItem('token');
    return axios.get("http://localhost:4000/getnote/"+id,{ headers: {"Authorization" : `Bearer ${token}`} })

  }

  export const getNotes=()=>{
    const token=localStorage.getItem('token');
    return axios.get("http://localhost:4000/getnotes/",{ headers: {"Authorization" : `Bearer ${token}`} })
  }

  export const updateNotes=(id,data)=>{
    const token = localStorage.getItem('token');
    return axios.put("http://localhost:4000/updatenotes/"+id,data,{ headers: {"Authorization" : `Bearer ${token}`} })
  }

export const deleteNotes=(id)=>{
  const token = localStorage.getItem('token');
  return axios.delete("http://localhost:4000/deletenotes/"+id,{ headers: {"Authorization" : `Bearer ${token}`} })
}