import React, { useState } from 'react';
import {Button, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import {login} from '../../Services/User';
import './Login.scss'
const Login = ()=>{
    const paperStyle = {padding :'10vh',height:'70vh',width:'80vh',margin:"20px auto"};
    const head = {color : "orange"};
    const fieldStyle = {margin:'2vh 0'};
    


    const[data,setData] = useState({
        emailId :'',
        password :''
      })
        
      const onSubmit = (event)=>{
        event.preventDefault();
        login(data)
          .then(response => console.log(response ))
          .catch(error=>console.log(error))
      }

      const inputEvent = (event)=>{
        console.log(event.target.id)
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
        <Grid  >
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
                <Typography>
                <Button type = "Submit" color = "primary" variant = "contained" onClick = {onSubmit} className='signIn' fullWidth>Sign In</Button>
                </Typography>
              
                <Typography >
                  <p className='register'>Create a new account?<Button href='/register' color='primary' variant = 'text'>Register</Button></p>
                </Typography>
                <Typography >
                <Link>Forgot Password</Link>
                </Typography>
            </Paper>
        </Grid>
    )
    
}
export default Login;