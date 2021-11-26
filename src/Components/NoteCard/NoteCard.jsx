import { Card, CardContent,CardActionArea } from "@mui/material";
import  './NoteCard.scss'
export default function NoteCard(props){

    const cardDesign={
        width: '300px',
        margin: '10px'
    }
    
    return(
       
        <Card style = {cardDesign} >
        <CardActionArea >
        <CardContent key = {props.data.id} >
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}