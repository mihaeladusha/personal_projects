import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

const EncouragementToast = ({ message, delay = 3000, show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), delay);
      return () => clearTimeout(timer);
    }
  }, [show, delay]);

  return (
    <Toast show={isVisible} style={{ position: "fixed", top: 40, right: 20 }}>
      <Toast.Header>
        <strong className="mr-auto">Encouragement</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default EncouragementToast;
