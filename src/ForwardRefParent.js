import React,{useRef} from 'react'
import ForwardRefChild from './ForwardRefChild';

function ForwardRefParent(){
    let inputRef = useRef(null)
    function getVal(){
        inputRef.current.value = "1000";
        inputRef.current.style.color = "red";
        inputRef.current.style.backgroundColor = "black";
        inputRef.current.focus();
    }
    return(
        <div>
            <h1>forwardRef in React JS</h1>
            <ForwardRefChild ref={inputRef}/>
            <button onClick={getVal}>Check Ref</button>
        </div>
    )

}

export default ForwardRefParent