import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
       this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount = () => {
        /* TODO (Counter): Use setState() to modify the count. Here’s an example:*/
        console.log('Button Clicked');
        this.setState({ 
            count: this.state.count +1
    
         });
        
    }
  
    render() {
        return (

            <div className="counter">
                
                <h1>{this.state.count}</h1>
                <h2><button onClick= {this.incrementCount}>
                    Increment count
                </button> </h2>
                
    
            </div>
        );
    }
}

export default Counter;