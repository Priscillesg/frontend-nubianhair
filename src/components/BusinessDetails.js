import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";



const BusinessDetails = () => {

    const [businessDetail, setBusinessDetail] = useState({})
    const { business_id } = useParams();

    useEffect (()=>{
        const abortController = new AbortController();
        const signal = abortController.signal

        fetch(`http://127.0.0.1:8000/api_list/${business_id}`, {
            'method':'GET',
            headers: {
              'Content-Type':'application/json',
              'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
            }
        }, { signal: signal })
        .then(resp => resp.json())
        .then(resp => {setBusinessDetail(resp);
        })
        .catch(error => console.log(error));
        return function cleanup() {
            abortController.abort();
          };
        
    },[business_id])
    

    return (
        <div>
        { Object.keys(businessDetail).length !==0?(
            <div class="container">
                <div class="row">
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
        ): <div></div>}

        </div>
    )
}

export default BusinessDetails;