import { Switch,Route } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from  './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { BrowserRouter } from 'react-router-dom';
function App() {
 


  return(
    <>
    <BrowserRouter>
      <Switch>
      <Route path='/login' component={Login}/>
      <Route path ='/register' component={Register}/>
      <ProtectedRoute path = '/dashboard' isAuth={localStorage.getItem('token')} component = {Dashboard} />
      <Route exact path = '/' component = {Login}/>
    </Switch>
</BrowserRouter>
        </>
  );
}

export default App;
 