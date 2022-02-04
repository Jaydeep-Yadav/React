import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Hello Sir";
const date = new Date();
const hour = date.getHours();
let greeting = "*";
const cssStyle = {}

if(hour<12) {greeting ="Good Morning";
cssStyle.color = 'green';
}
else if(hour<8) {greeting = "Good Afternoon";cssStyle.color = 'blue';}
else {greeting = "Good Night"; cssStyle.color = 'brown';}

ReactDOM.render(<><h1 className='heading'>{name}, <span style={cssStyle}>{greeting}</span></h1>
</>, document.getElementById('root'));