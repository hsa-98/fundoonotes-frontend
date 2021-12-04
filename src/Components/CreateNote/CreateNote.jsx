import './CreateNote.scss';
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {  IconButton, InputBase } from '@mui/material';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import {createNote} from '../../Services/Note'
import { Paper } from '@material-ui/core';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OnClickOut from 'react-onclickoutside';
import ClickAwayListener from '@mui/material/ClickAwayListener';
export default function CreateNote(props){
    const [expanded, setExpanded] = React.useState(false);

    const [data,setData] = useState({title:'',
    description:''})
        const handleChange = (panel)=>(event,isExpanded)=>{
            setExpanded(panel);
        }
       const onChange=(event)=>{
            const id = event.target.id
            const value= event.target.value
            console.log(id,value);
            setData((preValue)=>{
                if(id === 'title'){

                    return {
                        title:value,
                        description:preValue.description
                    }
                }else{
                    return{
                        title:preValue.title,
                        description:value
                    }
                }
            })
       }
       const onSubmit=(event)=>{
           if(data.title ==='' && data.description ===''){
               setExpanded(false);
           }
           else{
            setExpanded(false);
            createNote(data).then((response)=>{
                props.passNote(data)
                setData({title:'',
                        description:''})
            }).catch((err)=>alert('failed',err))
           }

           
        
       }
    return(                
        <div>
              
                 <Paper elevation={5}  style = {{marginTop:'5vh',marginLeft:'50vh', marginBottom:'5vh',width:'100vh'  }}> 
                 <ClickAwayListener onClickAway={onSubmit}>
            <Accordion id = 'accordion' expanded={expanded === 'panel1'}  onChange={handleChange('panel1')} > 
              <AccordionSummary  
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel-header">
                <InputBase
                    id='title'
                    placeholder='Title'
                    value={data.title}
                    onChange={onChange}
                
                    style={{width:'80vh',height:'5vh'}}>
                </InputBase>
              </AccordionSummary>
              <AccordionDetails>
              <InputBase
                    id='description'
                    placeholder='Note'
                    value={data.description}
                    onChange={onChange}
                style={{width:'80vh',height:'5vh'}}></InputBase>
              </AccordionDetails>
              <IconButton className='icon'>
                        <AddAlertIcon/>
                    </IconButton >
                    <IconButton >< PersonAddAltIcon className='icon'/></IconButton>
                    <IconButton>< ColorLensIcon className='icon'/></IconButton>
                    <IconButton><ImageIcon  className='icon' /></IconButton>
                    <IconButton>< ArchiveIcon className='icon' /></IconButton>
                    <IconButton> <MoreVertIcon className='icon'/></IconButton>
                    <IconButton> <UndoIcon className='icon'/></IconButton>
                    <IconButton><RedoIcon/></IconButton>
              <IconButton onClick={onSubmit}  >   
                        <AddCircleTwoToneIcon style = {{marginLeft:'30vh'}} fontSize='large' color='yellow'/>
                    </IconButton>
                   
            </Accordion>
            </ClickAwayListener>
            </Paper>
           
          </div>
                
    )        
    
}
 