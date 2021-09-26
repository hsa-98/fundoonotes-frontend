// import {Button, Grid,Paper, TextField, Typography} from '@material-ui/core';
// const Register = ()=>{
//     const paperStyle = {padding :20,height:'70vh',width:280,margin:"20px auto"};
//     const textStyle = {width:'50%',height:'75%'};
//     const inputEvent = (event)=>{

//     }
//     const onSubmit = (event)=>{
//         event.preventDefault();
        
//     }
//     return(<>
//          <Grid >
//             <Paper elevation = {10} style = {paperStyle}>
//                 <Grid align = 'center'>
//                 <h2 >FUNDOONOTES</h2>
//                 <h2>Register</h2>
//                  </Grid>
//                  <Typography>
//                      <TextField
//                         id = 'firstName'
//                         label="First Name" 
//                         variant="outlined"
//                         color='primary'
//                         style={textStyle}
//                     onChange = {inputEvent}
//                      />
//                      <TextField
//                         id='lastName'
//                         label='Last NAME'
//                         variant = 'outlined'
//                         onChange = {inputEvent}
//                         color='primary'
//                         style={textStyle}
//                      />
//                  </Typography>
//                  <Typography>
//                  <TextField id="emailId" 
//                     label="EmailId" 
//                     variant="outlined"
//                     onChange = {inputEvent}
//                     style={{marginTop:'20px'}} 
//                     fullWidth
//                     required/>
//                  </Typography>
//                  <Typography>
//                  <TextField
//                     id="password" 
//                     label="Password" 
//                     type="password" 
//                     fullWidth 
//                     variant="outlined" 
//                     onChange = {inputEvent} 
//                     style={{marginTop:'20px'}}
//                     required />
//                 </Typography>
//                 <Typography>
//                     <Button type = "Submit" 
//                     style={{marginTop:'20px' ,marginLeft:'70px'}} 
//                     color = "primary" 
//                     variant = "contained" 
//                     onClick = {onSubmit}>
//                         Register
//                     </Button>
//                 </Typography>
//             </Paper>
//         </Grid>

//     </>);
    
// }

// export default Register;