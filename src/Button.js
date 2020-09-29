import React from "react";

const Buttons = ({ onClick, name, value }) => {
  return (
    <>
      <input type="button" name={name} value={value} onClick={onClick} />
    </>
  );
};
export default Buttons;
