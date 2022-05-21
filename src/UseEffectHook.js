import { useEffect, useState } from "react";

function UseEffectHook(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.warn("useEffect")
    })
    return(
        <div>
            <h1>useEffect Hook {count}</h1>
            <button onClick={()=>setCount(count+1)}>Update count</button>
        </div>
    )
}

export default UseEffectHook;