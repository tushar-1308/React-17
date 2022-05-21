import React,{ useState } from "react"

function Form(){
    const [name, setName] = useState(null);
    const [interest, setInterest] = useState(null);
    const [tnc, setTnc] = useState(null);
    function getFormData(e){
        console.log(name, interest, tnc);
        e.preventDefault()
    }
    return(
        <form onSubmit ={getFormData}>
            <h1>User Form</h1>
            <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}></input> <br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select options</option>
                <option>Marvel</option>
                <option>DC</option>
            </select> <br/><br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}></input><span>Accept Terms and Conditions</span><br/><br/>
            <button type="submit">Submit</button>
            <button>Clear</button>
        </form>
    )
}

export default Form