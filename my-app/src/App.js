import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';

class App extends Component {
  state = { i:0}
  
  Start() {
    console.log("clicked")
  } 
  render() { 
    return (

      <><button onClick={this.Start}>Start</button><button onClick="Reset()">Reset</button> 
      <h1 id="res"> {this.state.i}</h1></>
      
    );
  }
}
 
export default App;