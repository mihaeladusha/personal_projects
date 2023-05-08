import React from "react";
import Button from "./Button";

const ButtonList = ({ buttons, startCounter, lastPressedButtonIndex }) => (
  <div className="button-container">
    {buttons.map((button, index) => (
      <Button
        key={index}
        button={button}
        startCounter={startCounter}
        lastPressedButtonIndex={lastPressedButtonIndex}
      />
    ))}
  </div>
);

export default ButtonList;
