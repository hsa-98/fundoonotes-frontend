
import './Note.scss'
import * as React from 'react'
import NoteCard from '../NoteCard/NoteCard'


export default function Note({addData,updateNote,deleteNote}){
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

  const handleDelete = (id,index)=>{
    const info = {
      id:id,
      index:index
    }
    deleteNote(info);
  }
  
  return(
    
       <div className='AllNotes'> 
    {(addData).map((val,index)=>{
     
        const key = val._id;
        return (
          <div key={key} >
           <NoteCard data={val} update={update} handleDelete={handleDelete} index={index}></NoteCard>
          </div>
         )
      })}
     </div>    
  )

}