import React, {useState} from 'react';

const App = () => {

  const purple = "38e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState('Click me')

  const bgChange = ()=>{
    let newBg = '#34495e';
    setBg(newBg);
    setName('Ouch !! 😆');
  };

  const bgBack = ()=>{
    setName('Double Clicked');
    setBg(bg);
  };



  return <>
    <div style={{backgroundColor:bg}}>
    <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name} </button>
    </div>
    
    
  </>;
};

export default App;
