import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Portfolio from  './pages/Portfolio';
import SwaggerDemo from './pages/SwaggerDemo';


const theme = createMuiTheme({
  palette: {
    primary: { 
      // dark:'#ee9924',
      main:'#2d2d30',
      opacity: '0.9'
    },
    secondary: { 
      main: '#FFFFFF' 
    }
    // type: "dark"
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Raleway, Arial',
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router>          
    <Route exact path='/' component={Portfolio}></Route> 
    <Route exact path='/SwaggerDemo' component={SwaggerDemo}></Route> 
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
