import React from 'react'
import BusinessDetails from './BusinessDetails';

const BusinessesList = (props) => {

   const render_list = props.businessdata.map(business => {
        return (
            <div >
                <BusinessDetails
                    key={business.id}
                    name = {business.name}
                    review = {business.review_count}
                    ></BusinessDetails>
            </div>)
        
      })

    return (
        <div>
            {render_list}
        </div>
    )
}

export default BusinessesList;