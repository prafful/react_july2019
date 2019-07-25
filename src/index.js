import React from 'react';
import ReactDOM from "react-dom";
import MyFirstComponent from './AppComponent';
import Counter from './counter/counter';


var position = document.getElementById('rootcontainer')

ReactDOM.render(
    <span>
    <div>
    <MyFirstComponent name="OBB">12</MyFirstComponent>
    <MyFirstComponent name="BNP">13</MyFirstComponent>
    <MyFirstComponent name="OWIOH">14</MyFirstComponent>
    
    </div>
    <Counter></Counter>
    </span>
    , position)