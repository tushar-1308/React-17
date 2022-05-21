import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function Routing(){
    return(
        <div>
            <Router>
                <Link to="/home">Home</Link><br/>
                <Link to="/about">About Us</Link><br/>
                <Link to="/contact">Contact Us</Link>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<AboutUs/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>    
            </Router>
        </div>
    )
}

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <h4>This is Home page</h4>
        </div>
    )
}

function AboutUs(){
    return(
        <div>
            <h1>About Us</h1>
            <h4>This is About Us page</h4>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h1>Contact Us</h1>
            <h4>This is Contact Us page</h4>
        </div>
    )
}

export default Routing