import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { TextField } from '@material-ui/core';
import { updateNotes } from '../../Services/Note';
import '../UpdateNote/UpdateNote.scss'

  
const UpdateNote =  forwardRef ((props,ref)=>{

    const[open,setOpen] = useState();
    const [data,setData]= useState({
        title:'',
        description:'',
    });
    useEffect(()=>{
        setData({
            title:props.updateData.title,
            description:props.updateData.description,
        })
    },[props.updateData])
    useImperativeHandle(
        ref,
        ()=>({
            handleOpen(){
                setOpen(true);
            },   
        })
    )
  
  const handleClose = () => {
        updateNotes(props.updateData.id,data).then(res=>{console.log(res)}).catch(err=>{
            console.log(err);
        })
      setOpen(false);
  };  

  const handleChange = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData({...data,[name]:value});

  }
   
    return(
        <Dialog open={open} onClose={handleClose} className='update' >
              <form>
              <DialogTitle  >
            <TextField
            autoFocus
            margin="dense"
            id="title"
            InputProps={{ disableUnderline: true }}
            type="text"
            name='title'
            value={data.title}
            onChange={handleChange}
            fullWidth
            variant="standard"
            />
              
            </DialogTitle>
           
            <DialogContent className='content'>
            <TextField
            multiline
            autoFocus
            InputProps={{ disableUnderline: true }}
            className='content1'
            margin="dense"
            id="description"
            name='description'
            type="text"
            value={data.description}
            onChange={handleChange}
            fullWidth
            variant="standard"
            />
            </DialogContent>
            
            </form>
        
      </Dialog>
    )
})

export default UpdateNote;