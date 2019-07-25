import React from 'react';

class Counter extends React.Component {

    constructor(){
        super()
        this.state = {
            "name":"PPP"
        }
        //this.changeName = this.changeName.bind(this)
    }

    changeName = function(){
        console.log(this.state.name)
        this.setState({name:"BNP"})
    }

    render() { 
        return ( 
            <div>
            Counter: {this.state.name}
            <br></br>
            <button onClick={this.changeName}>CHANGE</button>
            </div>
         );
    }
}
 
export default Counter;