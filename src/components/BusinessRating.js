import React from 'react';
import './BusinessRating.css'
import Rating from 'react-rating';

const BusinessRating = (props) => {
    return (
        <div className='rating'>
                <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                fractions={2}
                readonly
                initialRating={3}/>
                <p>{props.reviewCount}</p>
        </div>
    )
}

export default BusinessRating;