import './App.css';
// import axios from 'axios';
import BusinessesList from './components/BusinessesList';
import { useState , useEffect} from 'react';






function App() {
  const [businesses, setBusinesses] = useState([])

  useEffect( () => {
    fetch('http://127.0.0.1:8000/api_list/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
      }
    })
    .then(resp => resp.json())
    .then(resp => setBusinesses(resp["businesses"]))
    .catch(error => console.log(error))

  }, []);

  return (
    <div className="App">
        {businesses.map(business => {
          return <h2>{business["name"]}</h2>
        })}
      <BusinessesList/>
    </div>
  );
}

export default App;
