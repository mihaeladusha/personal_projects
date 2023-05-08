import React from "react";

const Modal = ({
  showModal,
  newName,
  setNewName,
  color,
  setColor,
  addButton,
}) =>
  showModal && (
    <div className="modal">
      <div className="modal-content">
        <label>
          New name:
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <button onClick={addButton}>Add Button</button>
      </div>
    </div>
  );

export default Modal;
