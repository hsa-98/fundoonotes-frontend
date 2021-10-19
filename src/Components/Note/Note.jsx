import { Card, CardContent, Grid } from "@mui/material";
import './Note.scss'
import { getNotes } from "../../Services/Note";
import { useState ,useEffect} from "react";
export default function Note(props){
  
  return(
       <div className='AllNotes'> 
    {(props.data).map((val,index)=>{
        return (
            <Card className='card'>
            <CardContent>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
            </CardContent>
          </Card>
         )
      })}
     </div>    
  )

}