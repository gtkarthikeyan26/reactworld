import React, {Component}from "react";
import Cardlist from "../components/Cardlist";
// import {robots}  from "./robots";
import SearchBox from "../components/searchbox"; // Capitalized the import
import '../containers/App.css'
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry";


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(users => {
            this.setState({robots:users})
        })
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0){
            return <h1 className="tc">Loading</h1>
        }else{
        return(
        <div className= "tc"> 
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} /> 
        <Scroll>
            <ErrorBoundry>
        <Cardlist robots ={filteredRobots}/>
            </ErrorBoundry>
        </Scroll>
        </div>
        )
    }
    }
}

export default App
