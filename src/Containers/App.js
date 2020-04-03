import React, { Component }  from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=> response.json())
     .then(users => this.setState({ robots: users })); 
}

onsearchchange = (event) => {
    this.setState({searchfield: event.target.value})
}
    render() { 
        const { robots, searchfield } = this.state
        const filteredRobots=robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });       
        return !robots.length ?
         <h1>loading...</h1> :
        (
             <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchchange={this.onsearchchange} />
                <Scroll> 
                    <Cardlist robots={filteredRobots} /> 
                </Scroll>
            </div>
        );
            
    }
}

export default App;