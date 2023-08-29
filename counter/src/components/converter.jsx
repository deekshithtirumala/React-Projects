import React, { Component } from 'react';

class Converter extends Component {
    state = { 
        result: '',
        convertTo: 'c',
     } 
    handleChange =(event)=>{
        let value = event.target.value
        if(this.state.convertTo==='c'){
            this.setState({result: value*5})
        }
        else{
            this.setState({result: value/5})
        }
    }
    handleSelect = (event)=>{
        this.setState({convertTo: event.target.value})
        
        
    }
    render() { 
        return (
            <div className="container">
                <div className="heading"><h1>Temperature Converter !!!!</h1></div>
                <div className="main">
                    <input type="number" id="input" placeholder='Enter Value'onChange={this.handleChange}/>
                    <label htmlFor="input">Cel</label>
                    <br />
                    <label htmlFor="convert">Convert to</label>
                    <select name="convert" id="convert" onChange={this.handleSelect}>
                        <option value="c">Celceius</option>
                        <option value="f">Ferinheit</option>
                    </select>
                    <br />
                    <legend>
                        <p>{this.state.result}</p>
                    </legend>
                </div>
            </div>
        );
    }
}
 
export default Converter;
