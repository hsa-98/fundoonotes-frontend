import {Button, Grid, Link, Paper, TextField, Typography} from '@material-ui/core';
import {login} from '../../Services/User';
import { ErrorMessage ,Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import '../Login/Login.scss'
import { useHistory} from 'react-router';
import FundooHeader from '../../Components/FundooHeader/FundooHeader';

const Login = ()=>{
    
   
    
    const history = useHistory();    


    // const[data,setData] = useState({
    //   emailId :'',
    //   password :''
    // })

    // const onSubmit = (event)=>{
      //   event.preventDefault();
      //   console.log(data);
      //   login(data)
      //     .then(response => console.log(response ))
      //     .catch(error=>console.log(error))
      // }
      // const inputEvent = (event)=>{
      //   console.log(event.target.id)
      //   const id = event.target.id;
      //   const value =event.target.value;
      //   setData((preValue)=>{
      //      if(id === "emailId"){ 
      //        return{
      //           emailId : value,
      //           password : preValue.password
      //        } 
      //       }
      //      else{
      //        console.log(preValue.emailId);
      //        return{
      //         emailId : preValue.emailId,
      //          password : value,
      //        }
      //      }
      //    })
      // }
     
      
    // const formik = useFormik(
      
    //   {initialValues:{
    //   emailId:'',
    //   password:''
    //   },
    //   validationSchema : yup.object({
    //     emailId: yup.string().email('Invalid Email address').required('Required'),
    //     password:yup.string().required()

    //   }),
    //   onSubmit: values=>{
    //     console.log(values);
    //     alert(JSON.stringify(values, null, 2));
    //     login(values)
    //       .then(response => console.log(response ))
    //       .catch(error=>console.log(error))
    //   }
    //   })
        
    return(
  
        <Formik 
          initialValues ={{
            emailId:'',
            password:''
          }}
            validationSchema ={ yup.object({
              emailId: yup.string().email('Invalid Email address').required('Required'),
              password:yup.string()
                        .required('Required')
      
            })}
            onSubmit = {values=>{
              login(values)
                .then(response => {
                  const token = response.data.data.token;
                  localStorage.setItem('token', token);
                  history.push('/dashboard');
                })
                .catch(error=>console.log(error))
            }}
        >
          {formik=>(
        <Grid>
          
            <Paper elevation = {10} className = 'paperStyle'>
              
                  <Grid align = 'center'>
                      <FundooHeader/>
                      <span id = 'header'>
                        <h2 >Sign In</h2>
                      </span>
                  </Grid>
                  <Form onSubmit={formik.handleSubmit}> 
                  <Field id="emailId"
                      as = {TextField} 
                      name = 'emailId'
                      label="EmailId" 
                      variant="outlined"
                      onChange = {formik.handleChange}
                      onBlur = {formik.handleBlur}
                      value={formik.values.emailId}
                      
                      helperText = {<ErrorMessage name = 'emailId'/>}
                      fullWidth
                      required/>
                      
                  <Field
                      as = {TextField}
                      name="password"
                      id="password" 
                      label="Password" 
                      type="password" 
                      fullWidth 
                      variant="outlined" 
                      onChange = {formik.handleChange}
                      helperText = {<ErrorMessage name = 'password'/>}
                      value={formik.values.password}
                      required  
                      className = 'fieldStyle'/>
                      
          
                  <Typography>
                    
                    <Button 
                    id = "signIn"
                    type = "Submit" 
                    color = "primary" 
                    variant = "contained"  
                    className='signIn' fullWidth>
                      Sign In</Button>
                  </Typography>
                
                  
                    <p className='register'>Create a new account?<Button href='/register' color='primary' variant = 'text'>Register</Button></p>
              
                  <Typography >
                  <Link>Forgot Password</Link>
                  </Typography>
                  </Form>
            </Paper>
        </Grid>
        )} 
        </Formik>
        
    
        
    )
    
    
}
export default Login;