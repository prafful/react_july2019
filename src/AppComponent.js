import React, {Component} from 'react';
import MySecondComponent from './secondComponent';


class MyFirstComponent extends Component {
    
    render() { 
        return ( 
                <div>
                    Hello {this.props.children}, 
                    <MySecondComponent 
                        name={this.props.name}
                        year = {this.props.children}>    
                    </MySecondComponent>
                    <hr></hr>
                </div> 
        );
    }
}
 
export default MyFirstComponent;