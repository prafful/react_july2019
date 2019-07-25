import React from 'react';

class MySecondComponent extends React.Component {
    state = {  }
    render() { 
        
        return ( 
            <div>
                Name: {this.props.name}
                <br></br>
                Location: location
                <br></br>
                Year: {this.props.year}
            </div>
         );
    }
}
 
export default MySecondComponent;