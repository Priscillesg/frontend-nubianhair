import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import BusinessesList from './components/BusinessesList';
import BusinessDetails from './components/BusinessDetails';
// import axios from 'axios';


const App = () => {
  return (
 
        <Switch>
          <Route path='/:business_id' component={BusinessDetails}/>
          <Route path='/api_list' component={BusinessesList}/>
          <Route path='/' component={HomePage}/>
        </Switch>
  );
}

export default App;
