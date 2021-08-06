import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";



const BusinessDetails = (props) => {

    const [businessDetail, setBusinessDetail] = useState({})
    const { business_id } = useParams();

    const getDetails = (path, id) =>{

        return fetch(`http://127.0.0.1:8000/${path}/${id}`, {
            'method':'GET',
            headers: {
              'Content-Type':'application/json',
              'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
            }
        } )
    }

    useEffect (()=>{
        const fetchDetails = async () => {
            try {
                const rawDetails = await getDetails('api_list', business_id);
                console.log(rawDetails);
                const resp = await rawDetails.json();
                setBusinessDetail(resp);
                
            } catch(e) {
                console.error(e);
                }
                };
                fetchDetails();
    },[business_id])

    
    return (
        <div>
            {/* <h2>Business Details</h2> */}
            <div>
            
            </div>
            <div class="container">
        <       div class="row">
                    <div class="col">
                    <img src={businessDetail.image_url} alt='businessDetail-img' placeholder='https://via.placeholder.com/150' className='businessDetail-image'/>
                    </div>
                    <div class="col">
                        <h3>{businessDetail.name}</h3>
                        {/* <p>{businessDetail.location.display_address}</p> */}
                        {/* <BusinessRating reviewCount={businessDetail.review_count}/> */}
                        <p>{businessDetail.rating} ({businessDetail.review_count} reviews)</p>
                        {/* <span>{businessDetail.categories.map(category => {return <li>{category["title"]}</li>})}</span> */}
                    </div>
                    <div class="col">Favoris</div>
                </div>
        </div>
       
        </div>
    )
}

export default BusinessDetails;