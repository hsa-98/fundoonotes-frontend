import Header from '../../Components/Header/Header'
import CreateNote from '../../Components/CreateNote/CreateNote'
import { useRef, useState } from 'react'
import Note from '../../Components/Note/Note';
import { useEffect } from 'react';
import { getNotes } from '../../Services/Note';
import UpdateNote from '../../Components/UpdateNote/UpdateNote'
import {deleteNotes} from '../../Services/Note.js'

export default function DashBoard(){
  const childRef = useRef();
  const [addData,setAddData] = useState([]);
  const [update,setUpdate] = useState(false);

  const [updateData,setUpdateData]=useState({
    title:'',
    description:'',
    id:''
  })
 
  useEffect(()=>{
    getNotes().then(response=>{
      const arr = response.data.data;
      setAddData(arr.reverse());
    }).catch(err=>{
      console.log(err);
      alert('Failed');
  })
  },[])

  const addNote = (data)=>{
    setAddData((prevData)=>{
      return[data,...prevData];
    })
  }
 
  const updateNote = (info)=>{
  
    setUpdateData({
      title:info.val.title,
      description:info.val.description,
      id:info.val._id
    })
    setUpdate(true);
    childRef.current.handleOpen();
  }

  const deleteNote = (info)=>{
    console.log(info);

    deleteNotes(info.id).then(response=>{
      const newNotes = addData.filter(note => note._id !== info.id);
      setAddData(newNotes);
    
    }).catch(err=>console.log(err))

  }
  return(
    <>
      <Header/>
      <CreateNote  passNote={addNote}/>
     <Note addData={addData} updateNote={updateNote} deleteNote = {deleteNote}></Note>
     {update}
     <UpdateNote updateData={updateData} ref={childRef}/>
    </>
  )
}