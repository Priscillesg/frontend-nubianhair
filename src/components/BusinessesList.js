import React, { useState, Link} from 'react';
import './BusinessesList.css'
import BusinessRating from './BusinessRating';
import { useParams } from "react-router-dom";

const BusinessesList = (props) => {
    // const { business_id } = useParams();

    // const [businessId, setBusinessId] =  useState("") 
    // const onBusinessDetails = (event) => {
    //     event.preventDefault();
    //     setBusinessId(`event.target.${business_id}`)
    //     if(typeof props.searchDetail === 'function') {
    //         props.searchDetail(businessId);
    //     }
    // }

    return (
        <div>
            
            {props.businessdata && props.businessdata.map(business => {
                return (
                    <div key={business.id} >
                        <div className="container">
                        <div className="row search-results">
                            <div className="col">
                            <img src={business.image_url} alt='business-img' placeholder='https://via.placeholder.com/150' className='business-image'/>
                            </div>
                            <div className="col business-info">
                            <a href={business.id}>
                            <h3>{business.name}</h3>
                            </a>
                            <p>{business.location.display_address}</p>
                            <BusinessRating reviewCount={business.review_count}/>
                            <p>{business.rating} ({business.review_count} reviews)</p>
                            <span>{business.categories.map(category => {
                                    return <li>{category["title"]}</li>
                            })
                            }</span>
                            </div>
                            <div className="col other">View details</div>

                        </div>
                        </div>
                    </div>
                )
            })}
            {/* <div className="container">
                <div className="row">
                    <div className="col">
                    Column
                    </div>
                    <div className="col">
                    Column
                    </div>
                    <div className="col">
                    Column
                    </div>
                </div>
            </div> */}
               
        </div>
    )
}

export default BusinessesList;