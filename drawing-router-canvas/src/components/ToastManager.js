import React, { useEffect, useState } from "react";
import EncouragementToast from "./EncouragementToast";
const encouragingMessages = [
  "Keep going!",
  "You're doing great!",
  "Excellent progress!",
  "Your drawing looks amazing!",
  "Impressive work!",
  "Your creativity is stunning!",
  "Wow, such talent!",
  "Keep up the good work!",
  "This is fantastic!",
  "You're a true artist!",
];

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    setToasts((toasts) => [...toasts, { id: Date.now(), message }]);
  };

  const removeToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        encouragingMessages[
          Math.floor(Math.random() * encouragingMessages.length)
        ];
      addToast(randomMessage);
    }, 5000); // create a new toast every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {toasts.map((toast) => (
        <EncouragementToast
          key={toast.id}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastManager;
