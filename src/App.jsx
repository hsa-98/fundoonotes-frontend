import axios from 'axios';
import { useState } from 'react';
import './App.css';
import {registerButton,nextButton} from './buttonStyle'


function App() {
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
    
     const id = event.target.name;
     const value =event.target.value;
     setData((preValue)=>{
       if(id === "emailId"){
         console.log(preValue.password);
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
    <>
    <div>
    <form onSubmit = {onSubmit}>
     <h3 >FUNDOONOTES</h3> 
      <p>Sign in</p>
      <p style ={{paddingLeft : "50px"}} >Use your Google Account</p>
     <input type = "text"
      placeholder = "Email" 
      name = "emailId"
      onChange = {inputEvent}
       />

      <input type = "password"
      placeholder = "Password"
      name= "password"
      onChange = {inputEvent}
      />

     <button style = {registerButton}>Create Account</button>
     <button  type = "submit" style = {nextButton}>Next</button>
    </form>
      </div>
    </>
  );
}

export default App;
