import { INCREMENT, DECREMENT } from "../actions";
import { combineReducers } from "redux";

// 이 코드들은 분리해서 counterReducer로 빼야하는데, 어짜피 하나라서 일단은 이렇게 만듬
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

// 이게 reducer index파일에 있어햐 하는 것.
const rootReducer = combineReducers({ counterReducer });

export default rootReducer;
