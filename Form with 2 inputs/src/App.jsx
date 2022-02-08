import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState("");
  const [lastNamenew, setLastNameNew] = useState('');
  const InputEvent = (event) => {
    setName(event.target.value);
  };

  const InputEventTwo = (event) =>{
    setLastName(event.target.value);
  }

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);

    setName("");
    setLastName('');
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>Hello {fullName} {lastNamenew} </h1>
            <input
              type="text"
              placeholder="Enter Your First Name"
              onChange={InputEvent}
              value={name}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={InputEventTwo}
              value={lastName}
            />
            <br />
            <button type="submit"> Submit me </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
