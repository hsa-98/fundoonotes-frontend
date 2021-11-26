
import './Note.scss'
import * as React from 'react'
import NoteCard from '../NoteCard/NoteCard'
import UpdateNote from '../UpdateNote/UpdateNote'
import { render } from '@testing-library/react';

export default function Note({addData,updateNote}){
//   const[width,setWidth] = React.useState('300px');
//   const card = {
//     width:width,
//     margin: '10px'
// }
const update = (val,index)=>{
  const info = {
    val:val,
    index:index
  };
  updateNote(info);
  
  }
  
  return(
    
       <div className='AllNotes'> 
    {(addData).map((val,index)=>{
     
        const key = val._id;
        return (
          <div key={key} onClick={()=>{update(val,index)}}>
           <NoteCard data={val} ></NoteCard>
          </div>
         )
      })}
     </div>    
  )

}