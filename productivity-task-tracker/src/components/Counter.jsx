import React from "react";

const Counter = ({ counter, lastPressedButtonIndex, buttons, formatTime }) => (
  <div
    className="counter"
    style={{
      backgroundColor: buttons[lastPressedButtonIndex]?.color || "transparent",
      color: buttons[lastPressedButtonIndex]?.color ? "white" : "black",
    }}
  >
    {counter !== null
      ? `You have been doing ${
          buttons[lastPressedButtonIndex]?.name || ""
        } for: ${formatTime(counter)}`
      : "Click a button to start the counter"}
  </div>
);

export default Counter;
