import react, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const date = new Date();
  
  const [time, updateTime] = useState(date.toLocaleTimeString());

  const IncrementNum = () => {
    if(count<10)
    setCount(count + 1)
  };
  
  const DecrementNum = () => {
    if(count>0)
    setCount(count - 1)
  };

  const GetTime = () =>{
    const date = new Date();
    updateTime(date.toLocaleTimeString());
  }

  return (
    <>
      <h1> {count} </h1>
      <button onClick={IncrementNum}> Increment </button>
      <button onClick={DecrementNum}> Decrement </button>
      <h1>{time}</h1>
      <button onClick={GetTime}> Get Time </button>
    </>
  );
};

export default App;
