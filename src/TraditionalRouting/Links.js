import { Link } from "react-router-dom"
import React from "react"

function Links(){
    return(
        <div>
            <Link to="/">Home Page</Link><br/>
            <Link to="/about">About US Page</Link><br/>
        </div>
    )
}

export default Links