import React, {Component} from 'react';

class Counter extends Component{
    state = {
        count: 0,
    }
    constructor(){
        super();
        this.handelIncrement = this.handelIncrement.bind(this)
    }
    handelIncrement(){
        console.log("Increment Clicked",this.state.count);
        this.setState({count:this.state.count+1});
    }
    countSetter(){
        if(this.state.count===0){
            return "Zero";
        }
        else{
            return this.state.count;
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                <h1>Counter App </h1>
                <p>Counts the number of times you tapped the button.</p>
                
                <button className="btn btn-secondary" onClick={this.handelIncrement}><span className='badge badge-light'>{this.countSetter()} </span> Click me</button>
            
                </div>
            </React.Fragment>
        );
    }
}

export default Counter;