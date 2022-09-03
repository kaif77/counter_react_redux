import { createStore } from "redux";

// reducer function
const reducerFunc = (state = { counter: 0 }, action) => {
  let { counter } = state;
  if (action.type === "INCREMENT") {
    return { counter: counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: counter - 1 };
  } else if (action.type === "ADD") {
    return { counter: counter + action.payload };
  } else if (action.type === "ADDANY") {
    return { counter: counter + action.payload };
  } else if (action.type === "RESET") {
    return {counter: 0};
  }else {
    return state;
  }
};

// Store
const store = createStore(reducerFunc);

export default store;
