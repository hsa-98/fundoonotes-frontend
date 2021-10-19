import Header from '../../Components/Header/Header'
import CreateNote from '../../Components/CreateNote/CreateNote'
import { useState } from 'react'
import Note from '../../Components/Note/Note';
import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { getNotes } from '../../Services/Note';

export default function DashBoard(){
  const [addData,setAddData] = useState([]);
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
    console.log(data);
  }
  return(
    <>
      <Header/>
      <CreateNote  passNote={addNote}/>
     <Note data={addData}></Note>
    </>
  )
}