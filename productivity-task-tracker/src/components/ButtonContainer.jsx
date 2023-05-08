import React, { useState, useEffect } from "react";
import ButtonList from "./ButtonList";
import Counter from "./Counter";
import AddButton from "./AddButton";
import Modal from "./Modal";

const ButtonContainer = () => {
  const [buttons, setButtons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [counter, setCounter] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [lastPressedButtonIndex, setLastPressedButtonIndex] = useState(null);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  };

  const [color, setColor] = useState(getRandomColor());
  const emojis = ["👍", "😀", "🎉", "🚀", "🐱", "🐶", "🦄", "🌟", "🌈", "🍔"];

  const addButton = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const newButton = { name: randomEmoji + newName, color: color };
    setButtons([...buttons, newButton]);
    setShowModal(false);
  };

  const startCounter = (index) => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    setCounter(0);
    setLastPressedButtonIndex(index);

    const id = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        return newCounter;
      });
    }, 1000);

    setIntervalId(id);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let timeString = `${remainingSeconds}s`;

    if (minutes > 0 || hours > 0) {
      timeString = `${minutes}m:${timeString}`;
    }

    if (hours > 0) {
      timeString = `${hours}h:${timeString}`;
    }

    return timeString;
  };

  return (
    <div>
      <Counter
        counter={counter}
        lastPressedButtonIndex={lastPressedButtonIndex}
        buttons={buttons}
        formatTime={formatTime}
      />
      <ButtonList
        buttons={buttons}
        startCounter={startCounter}
        lastPressedButtonIndex={lastPressedButtonIndex}
      />
      <AddButton
        setColor={setColor}
        getRandomColor={getRandomColor}
        setShowModal={setShowModal}
      />
      <Modal
        showModal={showModal}
        newName={newName}
        setNewName={setNewName}
        color={color}
        setColor={setColor}
        addButton={addButton}
      />
    </div>
  );
};

export default ButtonContainer;
