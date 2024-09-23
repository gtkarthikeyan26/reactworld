import React from "react";
import Cardlist from "./Cardlist";
import {robots}  from "./robots";
import Search from "./searchbox"; // Capitalized the import

const  App = () => {
    return (
        <div className= "tc"> 
        <h1>RoboFriends</h1>
        <Search /> 
        <Cardlist robots ={robots}/>
        </div>
    )
}

export default App