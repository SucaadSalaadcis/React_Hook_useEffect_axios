import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Effect() {

/* 
 
   // getting all data

    const [user, setUsers] = useState([]);

    useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        console.log(res.data);
        console.log(res.data[0].name);
        setUsers(res.data);

    }).catch((err) => console.log(err));
    });
 */


// getting one data 
    const [id, setId] = useState(1);
    const [user, setUsers] = useState({});

    useEffect(()=> {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
        console.log(res.data);
        setUsers(res.data); // datada idiga wadato lagu keydiyey oo ah 1
        console.log(res.data.name);
        // setId(3); // updates the id

    }).catch((err) => console.log(err));
    },[id]);

  return (
    <div>
        <input type="text" className='border-2 border-red-700 mt-10 mr-4' onChange={(e) => setId(e.target.value)}/>
        {/* input ka idga kasogaliyo uu qadana varibale id ga ah */}
        <p>{id}:</p> 
     {/* one data */}
     { user.id } - { user.name }

       {/* all data {
        user.map(users => <div key={users.id}>{users.id}-{users.name}</div>)
        } */}
        
    </div>
  )
}

export default Effect