import React from 'react'
import BusinessesList from './BusinessesList';
import Header from './Header';
import { useState , useEffect} from 'react';
import SearchBar from './SearchBar';
import BusinessDetails from './BusinessDetails';


const HomePage = () => {

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
      .then(resp => setBusinesses(resp))
      .catch(error => console.log(error))
  
    }, []);

    const [selectedBusiness, SetSelectedBusiness] = useState(null)


    const selectABusiness = (business_id) => {
        fetch('http://127.0.0.1:8000/api_list/<str:business_id>/', {
          'method':'GET',
          headers: {
            'Content-Type':'application/json',
            'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
          }
        })
        .then(resp => resp.json())
        .then(resp => SetSelectedBusiness(resp))
        .catch(error => console.log(error))
    
      };

    return (
        <div className="container">
            
            <Header/>

            <SearchBar/>
            <BusinessesList businessdata= {businesses} onBusinessSelect= {selectABusiness}/>
            
            {selectedBusiness.id?<BusinessDetails biz= {selectedBusiness}/>:" "}
        </div>
        

        
    )
}

export default HomePage