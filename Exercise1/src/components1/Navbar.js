import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom'

const Navbar=()=>{
return(
    <div>
        <Router>
        <NavLink to="/" exact activeStyle={
              { color:'green' }
            }>Dashboard</NavLink>
         <br></br>
            <NavLink to="/AddData" exact activeStyle={
              { color:'green' }
            }>Add User</NavLink>
        </Router>
    </div>
)
}
export default Navbar