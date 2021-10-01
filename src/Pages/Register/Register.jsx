import {Button, Grid,Paper, TextField, Typography} from '@material-ui/core';
import {register} from '../../Services/User';
import { useState } from 'react';
import '../Register/Register.scss'
const Register = ()=>{
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
    return(
        <>
        
            <Paper elevation = {10} className = "paperStyle">
            
                    <Grid>
                    <h2 className = "head" >FUNDOONOTES</h2>
                    <h4>Please Fill Details to Create an Account</h4>
                    </Grid>
                    
                    <Grid container spacing = {0}>
                        <Grid item  sm = {3}>
                            <TextField
                                id = 'firstName'
                                label="First Name" 
                                variant="outlined"
                                className="textStyle"
                                color = 'primary'
                            onChange = {inputEvent}
                            />
                        </Grid>
                        <Grid item sm = {3}>
                            <TextField
                                id='lastName'
                                label='Last Name'
                                variant = 'outlined'
                                onChange = {inputEvent}
                                className="textStyle"
                            />
                        </Grid>
                    </Grid>    
                        <div className = 'box'>
                            <TextField
                                id = 'emailId'
                                label = "Email Id"
                                variant = "outlined"
                                className = 'textField' 
                                onChange = {inputEvent}  
                            ></TextField>
                        </div>
                        <div className = 'box'> 
                            <TextField
                                id = 'password'
                                label = "password"
                                variant = "outlined"
                                className = 'textField'
                                onChange = {inputEvent}
                            ></TextField>
                        </div>
                    

                        <Typography className = 'button'>
                            <Button type = "Submit" 
                                className = "button" 
                                variant ="contained"
                                color='primary' 
                                onClick = {onSubmit}>
                                Register
                            </Button>
                        </Typography>
                        <Typography>
                            <p>Sign In instead? <Button href='/login' color='primary' variant = 'text'>Sign In</Button></p>
                        </Typography>
                        <div className="register-avatar">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt=''></img>
                        </div>
                      
            </Paper>
        </>
    );
    
}

export default Register;