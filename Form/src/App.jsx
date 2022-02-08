import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('Sir');
  const [fullName, setFullName] = useState('Sir');

  const InputEvent = (event) =>{
   setName(event.target.value);
  }
  const onSubmit = ()=>{
    setFullName(name);
  }
  return <>
    <h1>Hello {fullName}</h1>
    <input type="text" placeholder="Enter Your Name" onChange={InputEvent} value={name} />
    <button onClick={onSubmit}> Click me </button>  
  </>;
};

export default App;
