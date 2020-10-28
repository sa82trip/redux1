export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const increment = (number) => {
  return {
    type: INCREMENT,
    number,
  };
};
const decrement = (number) => {
  return {
    type: DECREMENT,
    number,
  };
};

//이렇게 해서 내보내기
const allActions = {
  increment,
  decrement,
};
export default allActions;
