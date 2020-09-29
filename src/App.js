import React, { useState, useRef } from "react";
import Counter from "./Counter";
import Button from "./Button";

function App() {
  const initializer = (result) => {
    setCount(() => {
      return result;
    });
    numberInput.current.value = "";
    numberInput.current.focus();
  };
  const [count, setCount] = useState(0);
  const numberInput = useRef(null);
  const handleClick = (e) => {
    console.log("entered");
    let result = 0;
    const regex = /[0-9]/;
    if (regex.test(numberInput.current.value)) {
      switch (e.target.name) {
        case "plus":
          result = parseInt(count) + parseInt(numberInput.current.value);
          initializer(result);
          return result;
        case "minus":
          result = parseInt(count) - parseInt(numberInput.current.value);
          initializer(result);
          return result;
        default:
          return 0;
      }
    }
  };
  return (
    <div className="App">
      <h1>This is redux Practice</h1>
      <div>
        <Counter counter={count} />
      </div>
      {/*
<input onClick={handleClick} name="plus" type="button" value="+" />
<input onClick={handleClick} name="minus" type="button" value="-" />
          */}
      <input type="text" ref={numberInput} />
      <Button onClick={handleClick} value={"+"} name={"plus"} />
      <Button onClick={handleClick} value={"-"} name={"minus"} />
    </div>
  );
}

export default App;
