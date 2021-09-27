import {Button, Grid,Paper, TextField, Typography} from '@material-ui/core';
import {register} from '../Services/User';
import { useState } from 'react';

const Register = ()=>{
    const paperStyle = {padding :20,height:'70vh',width:380,margin:"20px auto"};
    const textStyle = {width:'47.5%'};
    const head = {color : "orange"};

    const [data,setData] = useState({
        firstName :'',
        lastName :'',
        emailId :'',
        password :''
    })

    const inputEvent = (event)=>{
        console.log(event.target.value);
        const id = event.target.id;
        const value = event.target.value;
        setData((preValue)=>{
            if(id === 'firstName'){
                return{
                    firstName : value,
                    lastName : preValue.lastName,
                    emailId : preValue.emailId,
                    password : preValue.password
                }
            }
            else if(id === 'lastName'){
                return{
                    firstName : preValue.firstName,
                    lastName : value,
                    emailId : preValue.emailId,
                    password : preValue.password
                }
            }
            else if( id === 'emailId'){
                return{
                    firstName : preValue.firstName,
                    lastName : preValue.lastName,
                    emailId :  value,
                    password : preValue.password
                }
            }
            else if(id === 'password'){
                return{
                    firstName : preValue.firstName,
                    lastName : preValue.lastName,
                    emailId : preValue.emailId,
                    password : value
                }
            }   
        })
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(data);
        register(data)
            .then(response=>console.log(response))
            .catch(error=>console.log(error));
        
    }
    return(<>
         <Grid >
            <Paper elevation = {10} style = {paperStyle}>
                <Grid align = 'center'>
                <h2 style = {head} >FUNDOONOTES</h2>
                <h2>Register</h2>
                 </Grid>
                 <Typography>
                     <TextField
                        id = 'firstName'
                        label="First Name" 
                        variant="outlined"
                        color='primary'
                        style={textStyle}
                    onChange = {inputEvent}
                     />
                     <TextField
                        id='lastName'
                        label='Last Name'
                        variant = 'outlined'
                        onChange = {inputEvent}
                        color='primary'
                        style={textStyle}
                     />
                 </Typography>
                 <Typography>
                 <TextField id="emailId" 
                    label="EmailId" 
                    variant="outlined"
                    onChange = {inputEvent}
                    style={{marginTop:'20px'}} 
                    fullWidth
                    required/>
                 </Typography>
                 <Typography>
                 <TextField
                    id="password" 
                    label="Password" 
                    type="password" 
                    fullWidth 
                    variant="outlined" 
                    onChange = {inputEvent} 
                    style={{marginTop:'20px'}}
                    required />
                </Typography>
                <Typography>
                    <Button type = "Submit" 
                    style={{marginTop:'20px' ,marginLeft:'130px'}} 
                    color = "primary" 
                    variant = "contained" 
                    onClick = {onSubmit}>
                        Register
                    </Button>
                </Typography>
            </Paper>
        </Grid>

    </>);
    
}

export default Register;