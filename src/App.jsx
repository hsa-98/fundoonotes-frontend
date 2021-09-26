import { Switch,Route } from 'react-router-dom';
import Login from './components/Login'
import Register from  './components/Register';

function App() {
  return(
    <>
    {/* <Switch>
      <Route path='/login' component={Login}/>
      <Route path ='/register' component={Register}/>
      <Route exact path = '/' component = {Login}/>
    </Switch> */}
    </>
  );
}

export default App;
