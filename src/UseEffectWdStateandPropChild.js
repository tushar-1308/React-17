import {useState, UseEffect, useEffect} from 'react'

function UseEffectWdStateandPropChild(Props){
    const [dataState, setDataState] = useState(0);
    const [countState, setCountState] = useState(0);

    useEffect(()=>{
        console.warn("useEffect on Data state")
    },[dataState])
    useEffect(()=>{
        alert("useEffect on Count state " + countState)
    },[countState])

    useEffect(()=>{
        console.warn("useEffect on Data prop")
    },[Props.dataAsProp])
    useEffect(()=>{
        alert("useEffect on Count prop " + Props.countAsProp)
    },[Props.countAsProp])

    return(
        <div>
            <h1>Data State {dataState}</h1>
            <h1>Count State {countState}</h1>
            <button onClick={()=>setDataState(dataState+1)}>Update data state</button>
            <button onClick={()=>setCountState(countState+1)}>Update count state</button>
        </div>
    )
}

export default UseEffectWdStateandPropChild