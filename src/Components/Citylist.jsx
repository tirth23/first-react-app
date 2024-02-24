import React from 'react';
import { Enhance_component } from './Basecounter';

function Citylist(props) {
    let citylist=["mumbai","pune","delhi","Chennai"]
    return (
        <div>
            <button onClick={props.dec}>{"<"}</button>
            <span>{citylist[props.index]}</span>
            <button onClick={props.inc}>{">"}</button>
        </div>
    );
}

export default Enhance_component(Citylist);