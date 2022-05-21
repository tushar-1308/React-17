import React from "react";
import { forwardRef } from "react"

function ForwardRefChild(props, inputRef){
    return(
        <div>
            <input type="text" ref={inputRef}></input>
        </div>
    )
}

export default forwardRef(ForwardRefChild);

// forwardRef is a wrapper