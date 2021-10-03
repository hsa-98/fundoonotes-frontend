import {Button, Grid,Paper, TextField, Typography} from '@material-ui/core';
import {register} from '../../Services/User';
import {Formik,Form,ErrorMessage,Field} from 'formik';
import * as yup from 'yup'
import '../Register/Register.scss';
const Register = ()=>{
    // const inputEvent = (event)=>{
    //     console.log(event.target.value);
    //     const id = event.target.id;
    //     const value = event.target.value;
    //     setData((preValue)=>{
    //         if(id === 'firstName'){
    //             return{
    //                 firstName : value,
    //                 lastName : preValue.lastName,
    //                 emailId : preValue.emailId,
    //                 password : preValue.password
    //             }
    //         }
    //         else if(id === 'lastName'){
    //             return{
    //                 firstName : preValue.firstName,
    //                 lastName : value,
    //                 emailId : preValue.emailId,
    //                 password : preValue.password
    //             }
    //         }
    //         else if( id === 'emailId'){
    //             return{
    //                 firstName : preValue.firstName,
    //                 lastName : preValue.lastName,
    //                 emailId :  value,
    //                 password : preValue.password
    //             }
    //         }
    //         else if(id === 'password'){
    //             return{
    //                 firstName : preValue.firstName,
    //                 lastName : preValue.lastName,
    //                 emailId : preValue.emailId,
    //                 password : value
    //             }
    //         }   
    //     })
    // }
    // const onSubmit = (values)=>{
    //     console.log(values);
    //     register(values)
    //         .then(response=>console.log(response))
    //         .catch(error=>console.log(error));
        
    // }
    return(
        
        
            <Paper elevation = {10} className = "paperStyle">
                <Formik initialValues = {{
                                firstName :'',
                                lastName :'',
                                emailId :'',
                                password :'',
                                confirmPassword:''
                        }}
                    validationSchema ={yup.object({
                        firstName : yup.string().required('Required'),
                        lastName : yup.string().required('Required'),
                        emailId: yup.string().email('Enter a valid Email').required('Required'),
                        password: yup.string()
                        .required('Required'),
                        confirmPassword: yup.string()
                        .oneOf([yup.ref('password'), null], 'Passwords must match')
                    })}
                    onSubmit = {values=>{
                        console.log(values);
                        register(values)
                            .then(response=>console.log(response))
                            .catch(error=>console.log(error));
                        
                    }}
                >
                {formik =>(
                    <>
                    <Grid>
                    <h2 className = "head" >FUNDOONOTES</h2>
                    <h4>Please Fill Details to Create an Account</h4>
                    </Grid>
                    
                    <Form onSubmit = {formik.handleSubmit}>
                        <Grid container spacing = {0}>
                            <Grid item  sm = {3}>
                                <Field
                                    as = {TextField}
                                    name = "firstName"
                                    id = 'firstName'
                                    label="First Name" 
                                    variant="outlined"
                                    className="textStyle"
                                    color = 'primary'
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}
                                    value = {formik.values.firstName}
                                    helperText = {<ErrorMessage name = "firstName"
                                                    style = {{textDecorationColor:"red"}}/>}
                                />
                            </Grid>
                            <Grid item sm = {3}>
                                <Field
                                    as = {TextField}
                                    id='lastName'
                                    label='Last Name'
                                    variant = 'outlined'
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}
                                    value = {formik.values.lastName}
                                    helperText = {<ErrorMessage name = "lastName"/>}
                                    className="textStyle"
                                />
                            </Grid>
                        </Grid>    
                            <div className = 'box'>
                                <Field
                                    as = {TextField}
                                    id = 'emailId'
                                    label = "Email Id"
                                    variant = "outlined"
                                    className = 'textField' 
                                    value = {formik.values.emailId}
                                    onChange = {formik.handleChange}  
                                    helperText = {<ErrorMessage name = "emailId"/>}
                                    onBlur = {formik.handleBlur}
                                />
                            </div>
                            <div className = 'box'> 

                            <Grid container spacing = {0}>
                            <Grid item  sm = {3}>
                                <Field
                                    as = {TextField}
                                    id = 'password'
                                    label = "password"
                                    variant = "outlined"
                                    className = 'textStyle'
                                    value = {formik.values.password}
                                    helperText = {<ErrorMessage name = "password"/>}
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}                               />
                            </Grid>
                            <Grid item sm = {3}>
                                <Field
                                    as = {TextField}
                                    id = 'confirmPassword'
                                    label = "confirmPassword"
                                    variant = "outlined"
                                    className = 'textStyle'
                                    value = {formik.values.confirmPassword}
                                    helperText = {<ErrorMessage name = "confirmPassword"/>}
                                    onChange = {formik.handleChange}
                                    onBlur = {formik.handleBlur}                                 />
                            </Grid>
                        </Grid>  
                        </div>
                        

                            <Typography className = 'button'>
                                <Button type = "Submit" 
                                    className = "button" 
                                    variant ="contained"
                                    color='primary' 
                                >
                                    Register
                                </Button>
                            </Typography>
                            
                                <p>Sign In instead? <Button href='/login' color='primary' variant = 'text'>Sign In</Button></p>
                            
                            <div className="register-avatar">
                            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt=''></img>
                            </div>
                    </Form>
                    </>
                    )}
                </Formik>
            </Paper>
        
    );
    
}

export default Register;