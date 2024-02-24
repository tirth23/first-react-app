import React from 'react';
import { useFetch } from './Customhook';

function Postlist(props) {
    let postlist=useFetch("https://jsonplaceholder.typicode.com/posts")
    let postitems=postlist.map((post)=><li>{post.title}</li>)
    return (
        <div>
            {postitems}
        </div>
    );
}

export default Postlist;