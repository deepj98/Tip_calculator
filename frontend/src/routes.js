import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import dashboard from "./components/dashboard";

function routers(){
return(
    <Router>
        <Routes>
            <Route path="/" exact Component={dashboard}/>
        </Routes>
    </Router>
);

}
export default routers;