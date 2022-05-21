import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Links from './Links';
import Home from './Home';
import About from './About';

function Routing(){
    return(
        <div>
            <Links/>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/" exact={"true"} element={<Home/>}></Route>
            </Routes>
        </div>
    )
}

export default Routing