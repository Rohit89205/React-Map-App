import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';



const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Iffel State Building',
        description: 'One of the most famous sky scrapers in the world sdsdksndcv',
        imageUrl: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u2'
    }

];
const UserPlaces = props => {
    const userId =  useParams().userId;
    const loaded_places = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loaded_places}/>
}

export default UserPlaces;