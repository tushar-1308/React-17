import { useRef } from "react"

function UseRef(){
    let inputRef = useRef(null)
    function getVal(){
        console.warn("function call")
        inputRef.current.value = "1000";
        inputRef.current.style.color = "red";
        inputRef.current.focus();
    }
    return(
        <div>
            <h1>useRef Hook in React js</h1>
            <input type="text" ref={inputRef}></input>
            <button onClick={getVal}>Check Ref</button>
        </div>
    )
}

export default UseRef