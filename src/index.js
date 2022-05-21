import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ForwardRefParent from './ForwardRefParent';
import ControlledComponent from './ControlledComponent';
import UncontrolledComponents from './UncontrolledComponents';
import User from './HOC';
import Routing from './Routing';
// import Routing from './TraditionalRouting/Routing';
import PageNotFound from './PageNotFound';
// import DynamicRouting from './DynamicRouting';
import PreviousState from './PreviousState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* for traditional routing */}
    {/* <Router><Routing/></Router> */}

    {/* <DynamicRouting/> */}
    <PreviousState/>
  </React.StrictMode>
);

function ComponentInMainFile() {
  return (
    <div>
      <h1>
        Component In Main File
      </h1>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
