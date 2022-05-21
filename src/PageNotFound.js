import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

function PageNotFound(){
    return(
        <div>
            <Router>
                <Link to="/">Home</Link> <br></br>
                <Link to="/about">About</Link> <br></br>
                <Link to="/login">Login</Link> <br></br>
                <Routes>
                    <Route path="/" element={<Home />}></Route> 
                    <Route path="/about" element={<About />}></Route>  
                    <Route path="*" element={<Pagenotfound />}></Route>    
                </Routes>
            </Router>
        </div>
    )
}


function Home(){
    return(
        <div>
            <h2>Home Page</h2>
            <h4>This is Home Page</h4>
        </div>
    )
}

function About(){
    return(
        <div>
            <h2>About Page</h2>
            <h4>This is About Page</h4>
        </div>
    )
}

function Pagenotfound(){
    return(
        <div>
            <h1>Error 404 - Page Not Found</h1>
        </div>
    )
}

export default PageNotFound