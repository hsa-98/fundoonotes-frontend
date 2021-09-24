
import './App.css';
import {registerButton,nextButton} from './buttonStyle'

function App() {

  const password = ()=>{
    
  }

  


  return(
    <>
    <div>
    <form>
     <h3 >FUNDOONOTES</h3> 
      <p>Sign in</p>
      <p style ={{paddingLeft : "50px"}} >Use your Google Account</p>
     <input type = "text"
      placeholder = "Email"
       defaultValue = "" 
       />
     <button> forgot Email? </button>
     <button style = {registerButton}>Create Account</button>
     <button style = {nextButton} onClick = {password}>Next</button>
    </form>
      </div>
 
    </>
  );
}

export default App;
