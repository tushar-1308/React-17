import React from "react"
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import DynamicRoutingChild from "./DynamicRoutingChild"

function DynamicRouting(){
    const users = [
        {id: 1, name: "Tushar", address: "Gurgaon"},
        {id: 2, name: "Sam", address: "Bangalore"},
        {id: 3, name: "Peter", address: "Hyderabad"},
        {id: 4, name: "Bob", address: "Pune"}
    ]

    return(
        <div>
            <Router>
                <h1>Dynamic Routing</h1>
                {
                    users.map((item, key)=>
                        <Link to={"/user"+item.id+"/"+item.name}><h3>{item.name}</h3></Link>
                    )
                }
                <Routes>
                    <Route path={"/user/:id/:name"} element={<DynamicRoutingChild />}></Route>    
                </Routes>
            </Router>
        </div>
    )
}

export default DynamicRouting