import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axiosdemo(props) {
    const [todos,settodos]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            console.log(res)
            settodos(res.data)})
    },[])
    let todoitems=todos.map((todo)=><li>{todo.title}</li>)
    return (
        <div>
            <ul>{todoitems}</ul>
        </div>
    );
}
//https://trainingdata-13117.firebaseio.com/courses.json
export default Axiosdemo;