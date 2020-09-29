import { INCREMENT, DECREMENT } from "../actions";
import { combineReducers } from "redux";

const counterInitialState = 0;

const counterReducer = (state = counterInitialState, action) => {
  const intNum = parseInt(action.number);
  switch (action.type) {
    case INCREMENT:
      console.log("plus entered");
      console.log(action);
      return state + intNum;
    case DECREMENT:
      console.log("minus entered");
      return state - intNum;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;
