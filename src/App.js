import React, { useRef } from "react";
import Counter from "./Counter";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";

function App() {
  const initializer = () => {
    numberInput.current.value = "";
    numberInput.current.focus();
  };

  const count = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();
  const numberInput = useRef(null);
  const handleClick = (e) => {
    const regex = /[0-9]/;
    if (regex.test(numberInput.current.value)) {
      dispatch(actions[`${e.target.name}`](numberInput.current.value));
      initializer();
    }
  };
  return (
    <div className="App">
      <h1>This is redux Practice</h1>
      <div>
        <Counter counter={count} />
      </div>
      <input type="text" ref={numberInput} />
      <Button onClick={handleClick} value={"+"} name={"increment"} />
      <Button onClick={handleClick} value={"-"} name={"decrement"} />
    </div>
  );
}

export default App;
