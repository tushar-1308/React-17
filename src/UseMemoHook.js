// use to stop function unnecessary calling(it is used to make 
// PureComponent in function component)

import { useMemo, useState } from "react"

function UseMemoHook(){
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(10);

    // function multiCount(){
    //     console.warn("rendering");
    //     return count*5
    // }

    const multiCount = useMemo(function multiCount(){
        console.warn("rendering");
        return count*5
    }, [count])

    return(
        <div>
            <h1>count {count}</h1>
            <h1>item {item}</h1>
            <h2>{multiCount}</h2>
            {/* <h2>{multiCount()}</h2> */}
            <button onClick={()=>setCount(count+1)}>Update count</button>
            <button onClick={()=>setItem(item*10)}>Update item</button>
        </div>
    )
}

export default UseMemoHook