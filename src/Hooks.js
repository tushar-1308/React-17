import React, {useState} from "react";

function Hooks(){
    const [name, setName] = useState("Tushar")
    return(
        <div>
            <h1>Hooks</h1>
            <h1>{name}</h1>
            <button onClick={()=>setName("Bansal")}>Update data</button>
        </div>
    )
}

export default Hooks;