import { Card, CardContent,CardActionArea, IconButton } from "@mui/material";
import  './NoteCard.scss'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React from 'react';
import { styled } from '@mui/system';


export default function NoteCard(props){
    const[icons,setIcons] = React.useState(false);
    const[pad,setPad] = React.useState('27px')

    const cardDesign={
        width: '300px',
        margin: '10px'
    }
    const Padding = styled('p')({
      paddingBottom:pad
    });

    const whenOver = ()=>{
      setPad('0px');
      setIcons(true);
      
    }
    const whenNotOver = ()=>{
      setPad('27px');
      setIcons(false);
    }
    
    return(
       
        <Card  
        variant = 'outlined' 
        style = {cardDesign} 
        elevation={5} 
        onMouseEnter = {()=> whenOver()}
        onMouseLeave = {()=> whenNotOver()}  >
        <CardActionArea >
        <CardContent key = {props.data.id} onClick={()=>{props.update(props.data,props.index)}} 
         >
            <h3>{props.data.title}</h3>
            <Padding>
            <p >{props.data.description}</p>
            </Padding>
        </CardContent>
      </CardActionArea>
      
      {icons && (
        <div>
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
        </div>
      )}
           
    </Card>
    )
}