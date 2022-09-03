import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  // const counter = useSelector("counter");

  const [value, setValue] = useState(0);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  const addByFive = () => dispatch({ type: "ADD", payload: 5 });
  const addAny = () => dispatch({ type: "ADDANY", payload: value });
  const reset = () => {
    dispatch({ type: "RESET" });
    setValue(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addByFive}>Add By 5</button>
      <br />
      <input type="text" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <br />
      <button onClick={addAny}>Add Entered Value</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default App;
