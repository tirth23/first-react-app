import React from 'react';

function Namelist(props) {
    let names=["dinesh","sachin","dhoni","virat","ashwin"]
    let listitems=names.map((name,index)=><li key={index}>{name}</li>)

    return (
        <div>
            <ul>
             {listitems}
            </ul>
        </div>
    );
}

export default Namelist;