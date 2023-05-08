import React, { useState, useRef, useEffect } from "react";
import { Toast, ButtonGroup, Button } from "react-bootstrap";
import ToastManager from "./ToastManager";

const DrawableCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  let isDrawing = false;
  const [color, setColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(5);
  const [toastShow, setToastShow] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pixelRatio = window.devicePixelRatio;

    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(pixelRatio, pixelRatio);
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    contextRef.current = context;
  }, []);

  useEffect(() => {
    const context = contextRef.current;
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
  }, [color, lineWidth]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    isDrawing = true;
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    isDrawing = false;
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setLineWidth(newColor === "white" ? 30 : 5);
  };

  return (
    <div>
      <ButtonGroup className="w-100">
        <Button
          className="w-20"
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => handleColorChange("black")}
        >
          Black
        </Button>
        <Button
          className="w-20"
          style={{ backgroundColor: "red" }}
          onClick={() => handleColorChange("red")}
        >
          Red
        </Button>
        <Button
          className="w-20"
          style={{ backgroundColor: "green" }}
          onClick={() => handleColorChange("green")}
        >
          Green
        </Button>
        <Button
          className="w-20"
          style={{ backgroundColor: "blue" }}
          onClick={() => handleColorChange("blue")}
        >
          Blue
        </Button>
        <Button
          className="w-20"
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          }}
          onClick={() => handleColorChange("white")}
        >
          Eraser
        </Button>
      </ButtonGroup>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <ToastManager />
    </div>
  );
};

export default DrawableCanvas;
