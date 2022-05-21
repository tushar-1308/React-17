// Uncontrolled components = input fields which is not controlled by states, 
//  rest any method

import React,{ useRef } from "react"

function UncontrolledComponents(){
    let inputRef1 = useRef(null);
    let inputRef2 = useRef(null);

    function getData(e){
        e.preventDefault();
        // console.warn(inputRef1.current.value);
        // console.warn(inputRef2.current.value);
        alert(inputRef1.current.value+" "+inputRef2.current.value)
    }
    return(
        <div>
            <h1>Uncontrolled Components</h1>
            <form onSubmit={getData}>
                <input type="text" ref={inputRef1}></input> <br></br> <br></br>
                <input type="text" ref={inputRef2}></input> <br></br> <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledComponents