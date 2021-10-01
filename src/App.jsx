import { Switch,Route } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from  './Pages/Register/Register';

function App() {
  return(
    <>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path ='/register' component={Register}/>
      <Route exact path = '/' component = {Login}/>
    </Switch>
    </>
  );
}

export default App;
