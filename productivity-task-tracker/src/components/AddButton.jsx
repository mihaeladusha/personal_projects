import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddButton = ({ setColor, getRandomColor, setShowModal }) => (
  <button
    className="add-button"
    onClick={() => {
      setColor(getRandomColor());
      setShowModal(true);
    }}
  >
    <AiOutlinePlus />
    <br />
    Add
  </button>
);

export default AddButton;
