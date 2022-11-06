import React, { useState, useEffect } from "react";

const Stopwatch = (glob) => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    useEffect(() => {
      let interval;
      if (running) {
        setRunning(true);
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        setRunning(false);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
        <div className="stopwatch">
          <div className="numbers">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
          {() => (glob[0]=time)}
        </div>
    );
  };

export default Stopwatch;