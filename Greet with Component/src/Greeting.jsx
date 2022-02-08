import React from "react";

const date = new Date();
const hour = date.getHours();
let greet = '';

if(hour<12){greet="Good Morning"}
else if(hour<8){greet="Good Afternoon"}
else {greet="Good Night"}

function Greeting(){
    return <h1>Hello Jaydeep, {greet}</h1>
}

export default Greeting;