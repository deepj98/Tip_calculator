import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./components/dashboard";

function Routers(){
return(
    <Router>
        <Routes>
            <Route path="/" exact Component={Dashboard}/>
        </Routes>
    </Router>
);

}
export default Routers;