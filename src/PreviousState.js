import React, { useState } from "react"

function PreviousState(){
    const [Counter, setCount] = useState(0)

    function updateCounter(){
        let rand = Math.floor(Math.random()*10)
        setCount((pre)=>{
            console.warn(pre)
            return rand;
        })
    }

    return(
        <div>
            <h1>{Counter}</h1>
            <button onClick={updateCounter}>Update Counter</button>
        </div>
    )
}

export default PreviousState