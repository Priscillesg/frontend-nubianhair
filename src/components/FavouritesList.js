import React from 'react';
import { useState, useEffect } from 'react';
import RemoveFavourite from './RemoveFavourite';
import APIService from './APIService';
import {useCookies} from 'react-cookie';

const FavouritesList = () => {
    const [favouritesList, setFavouritesList] = useState([])
    // const [deletedFavourite, setDeletedFavourites] = useState({})
    const [selectedId, setSelectedId] = useState('')
    const [token] = useCookies(['mytoken'])

    
 
        
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/favoris/', {
            'method':'GET',
            headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token['mytoken']}` 
            }
        })
        .then(resp => resp.json())
        .then(resp => setFavouritesList(resp))
        .catch(error => console.log(error))

    }, [token]) 
    


    const onDeleteFavourites= (id) => {
        
        const newFavouriteList = favouritesList.filter(
            
			(favourite) => favourite.id !== id
            
		);

        setFavouritesList(newFavouriteList);
        setSelectedId(id)
        
    }

 
    useEffect(() => {
        APIService.DeleteFavourite(selectedId)
        .then(resp =>  console.log(resp))
        .catch(error =>console.log(error))

    }, [selectedId]) 

    const listOfFavourites = favouritesList.map((favourite) =>{
        return (
            <div key={favourite.id}>
                <div onClick = {()=>onDeleteFavourites(favourite.id)}>{favourite.name}</div>
                <div><RemoveFavourite/></div>
            </div>

        )}
        
    )



    return (
        <div>
            <div>
            {listOfFavourites}
            </div>
            
        </div>
    )
}

export default FavouritesList;