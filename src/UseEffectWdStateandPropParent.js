import UseEffectWdStateandPropChild from './UseEffectWdStateandPropChild'
import {useState} from 'react'

function UseEffectWdStateandPropParent(){
    const [dataProp, setDataProp] = useState(0);
    const [countProp, setCountProp] = useState(0);
    return(
        <div>
            <UseEffectWdStateandPropChild countAsProp={countProp} dataAsProp={dataProp}/>
            <h1>Data prop {dataProp}</h1>
            <h1>Count prop {countProp}</h1>
            <button onClick={()=>setDataProp(dataProp+1)}>Update data prop</button>
            <button onClick={()=>setCountProp(countProp+1)}>Update count prop</button>
        </div>
        
    )
}

export default UseEffectWdStateandPropParent