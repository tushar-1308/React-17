// HOC - component which takes component as parameter and return component also

import { useState } from "react"
import React from "react";

function User(){
    return(
        <div>
            <h2>High Order Component</h2>
            <HOC cmp={Counter}/>
        </div>
    )
}

function HOC(props){
    return(
        <div style={{backgroundColor: "red", width: 100}}>
            <props.cmp/>
        </div>
    )
}

function Counter(){
    const [count, setCount] = useState(0);
    return<div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    
}

export default User