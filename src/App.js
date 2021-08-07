import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import BusinessesList from './components/BusinessesList';
import BusinessDetails from './components/BusinessDetails';
import Login from './components/Login';
import {CookiesProvider} from 'react-cookie';
// import axios from 'axios';


const App = () => {
  return (
    <CookiesProvider>
    <Router>
          <Route  path='/api_list' exact component={BusinessesList}/>
          <Route  path='/' exact component={HomePage}/>
          <Route  path='/login' exact component={Login}/>
          <Route  path='/:business_id' exact component={BusinessDetails}/>
    </Router>
    </CookiesProvider>

  );
}

export default App;
