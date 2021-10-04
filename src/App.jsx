import { Switch,Route } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from  './Pages/Register/Register';
import { Dashboard} from './Pages/Dashboard/Dashboard';

function App() {
  return(
    <>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path ='/register' component={Register}/>
      <Route path = '/dashboard' component = {Dashboard}/>
      <Route exact path = '/' component = {Login}/>
    </Switch>
    </>
  );
}

export default App;
