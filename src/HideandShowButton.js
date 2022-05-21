import React, {useState} from "react"

function HideandShowButton(){
    const [state, setState] = useState(true);
    return(
        <div>
            {
                state?
                <h1>Tushar Bansal</h1>
                :null
            }

            {/* Two buttons */}
            {/* <button onClick = {()=>setState(false)}>Hide</button>
            <button onClick = {()=>setState(true)}>Show</button> */}

            {/* One button */}
            <button onClick={()=>setState(!state)}>Toggle button</button>
        </div>
    );
}

export default HideandShowButton