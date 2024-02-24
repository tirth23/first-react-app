import React, { useEffect, useState } from 'react';

function UserComp(props) {
    const [userlist,setUserList]=useState([])
    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/users")
    .then((data)=>data.json())
    .then((jsondata)=>setUserList(jsondata))},[])
    

    let useritems=userlist.map((user)=><li>{user.name}</li>)

    return (
        <div>
            <ul>
               {useritems}
            </ul>
        </div>
    );
}
export let msg = "hello";

export default UserComp;