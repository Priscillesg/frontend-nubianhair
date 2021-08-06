import React from 'react'
import BusinessesList from './BusinessesList';
import Header from './Header';
import { useState } from 'react';
import SearchBar from './SearchBar';
import BusinessDetails from './BusinessDetails';
// import { useHistory } from "react-router-dom";
// import queryString from 'query-string';


const HomePage = () => {

    const [businesses, setBusinesses] = useState([])

    const getData = (path, queryParams) =>{

        return fetch(`http://127.0.0.1:8000/${path}?${queryParams}`, {
            'method':'GET',
            headers: {
              'Content-Type':'application/json',
              'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
            }
        } )
    }

    const search = (term, location)=> {

    
            const fetchData = async () => {
                try {
                    const rawData = await getData('api_list/', `term=${term}&location=${location}`);
                    console.log(rawData);
                    const resp = await rawData.json();
                    setBusinesses(resp);
                    console.log(resp)
                    console.log(businesses)
                    
                } catch(e) {
                    console.error(e);
                }
            };
            fetchData();

    }

    return (
        <div className="container">
            
            <Header/>

            <SearchBar search={search}/>
            {/* <BusinessesList businessdata= {businesses}/> */}
            <BusinessesList businessdata= {businesses}/> 
            
            <BusinessDetails/>
        </div>
        

        
    )
}

export default HomePage