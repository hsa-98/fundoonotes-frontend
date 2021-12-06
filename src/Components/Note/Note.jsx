
import './Note.scss'
import * as React from 'react'
import NoteCard from '../NoteCard/NoteCard'
import Masonry from 'react-masonry-css'

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
    <Masonry    breakpointCols={3}
    className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
   
      
    {(addData).map((val,index)=>{
     
        const key = val._id;
        return (
         
          <div key={key} >
           <NoteCard data={val} update={update} handleDelete={handleDelete} index={index}></NoteCard>
          </div>
       
         )
      })}
     
     </Masonry>  
  )

}