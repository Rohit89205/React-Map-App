import React from 'react';
import UsersList from '../components/UsersList'

const Users = ()=>{
    const USERS = [
        {
        id: 'u1', 
        name: 'Rohit yadavs', 
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
        places: 3
    }
];

    return <UsersList items={USERS}/>
}


export default Users;