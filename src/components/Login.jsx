import React, { useState } from 'react';
import {Button, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import axios from 'axios';

const Login = ()=>{
    const paperStyle = {padding :20,height:'70vh',width:280,margin:"20px auto"};
    const head = {color : "orange"}
    const fieldStyle = {margin:'10px 0'}
    const buttonStyle = {marginLeft:'100px' }
    const linkStyle = {marginBottom : '50px'}

    const[data,setData] = useState({
        emailId :'',
        password :''
      })
        
      const onSubmit = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:4000/login",data)
          .then(response => console.log(response ))
          .catch(error=>console.log(error))
      }

      const inputEvent = (event)=>{
        console.log(event.target.value)
        const id = event.target.id;
        const value =event.target.value;
        setData((preValue)=>{
           if(id === "emailId"){ 
             return{
                emailId : value,
                password : preValue.password
             } 
            }
           else{
             console.log(preValue.emailId);
             return{
              emailId : preValue.emailId,
               password : value,
             }
           }
         })
      }
    
    return(
        <Grid >
            <Paper elevation = {10} style = {paperStyle}>
                <Grid align = 'center'>
                    <h2 style={head}>FUNDOONOTES</h2>
                    <h2 >Sign In</h2>
                 </Grid>
                <TextField id="emailId" 
                    label="EmailId" 
                    variant="outlined"
                    onChange = {inputEvent} 
                    fullWidth
                    required/>
                <TextField
                    id="password" 
                    label="Password" 
                    type="password" 
                    fullWidth 
                    variant="outlined" 
                    onChange = {inputEvent} 
                    required  
                    style = {fieldStyle}/>
                <Typography 
                    style ={linkStyle}>
                <Link>Forgot Password</Link>
                </Typography>
                <Typography>
                <Button href='/register' color='primary'>Register</Button>
                <Button type = "Submit" color = "primary" variant = "contained" onClick = {onSubmit} style = {buttonStyle}>Sign In</Button>
                </Typography>
            </Paper>
        </Grid>
    )
    
}
export default Login;