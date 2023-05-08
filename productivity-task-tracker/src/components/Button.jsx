import React from "react";

const Button = ({ index, button, startCounter, lastPressedButtonIndex }) => (
  <button
    key={index}
    className={`emoji-button ${
      index === lastPressedButtonIndex ? "last-pressed" : ""
    }`}
    style={{ backgroundColor: button.color }}
    onClick={() => startCounter(index)}
  >
    <span className="emoji">{button.name.slice(0, 2)}</span>
    <span className="text">{button.name.slice(2)}</span>
  </button>
);

export default Button;
