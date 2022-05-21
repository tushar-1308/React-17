// controlled components = input fields which is controlled by states

import { useState } from "react"
import React from "react";

function ControlledComponent(){
    const [data, setData] = useState("");
    return(
        <div>
            <h1>Controlled Component</h1>
            <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}}></input>
            <h1>{data}</h1>
        </div>
    )
}

export default ControlledComponent