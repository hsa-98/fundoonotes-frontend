import { Card, CardContent,CardActionArea, IconButton } from "@mui/material";
import  './NoteCard.scss'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function NoteCard(props){
    

    const cardDesign={
        width: '300px',
        margin: '10px'
    }
    
    return(
       
        <Card style = {cardDesign} >
        <CardActionArea >
        <CardContent key = {props.data.id} onClick={()=>{props.update(props.data,props.index)}}  >
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
        </CardContent>
      </CardActionArea>
      <IconButton>
        <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
      </IconButton>
      <IconButton>
        <GroupsOutlinedIcon></GroupsOutlinedIcon>
      </IconButton>
      <IconButton>
        <ColorLensOutlinedIcon></ColorLensOutlinedIcon>
      </IconButton>
      <IconButton>
        <ImageOutlinedIcon></ImageOutlinedIcon>
      </IconButton>
      <IconButton>
        <ArchiveOutlinedIcon>
        </ArchiveOutlinedIcon>
      </IconButton>
        <IconButton onClick={()=>{
            console.log(props);
            props.handleDelete(props.data._id,props.index)}}>
            <DeleteOutlinedIcon ></DeleteOutlinedIcon>
        </IconButton>
           
    </Card>
    )
}