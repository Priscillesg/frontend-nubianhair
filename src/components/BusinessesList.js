import React from 'react'
;

const BusinessesList = (props) => {

    const onBusinessClick = () => {
        props.onBusinessSelect(props.id)
    }

    return (
        <div>
           {props.businessdata && props.businessdata.map(business => {
        return (
            <div key={business.id}>
               <h3>{business.name}</h3>
               <h3>{business.review_count}</h3>
               <hr/>
            </div>
            )
        })}
        <div>
            <button type="button" class="btn btn-primary"onClick={onBusinessClick} >View details</button>
        </div>
        
        </div>
    )
}

export default BusinessesList;