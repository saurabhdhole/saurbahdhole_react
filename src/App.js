import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from  './pages/Portfolio';
import SwaggerDemo from './pages/SwaggerDemo';
import SwaggerGetUser from './pages/SwaggerGetUser';





function App() {
  return (
    <Router>          
    <Route exact path='/' component={Portfolio}></Route> 
    <Route exact path='/SwaggerDemo' component={SwaggerDemo}></Route>
    <Route exact path='/SwaggerDemo/GetUser' component={SwaggerGetUser}></Route> 
    </Router>
  );
}

export default App;
