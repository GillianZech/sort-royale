import React, { useState, useEffect } from "react";

const Stopwatch = (glob) => {
    const start_time = new Date();
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    useEffect(() => {
      let interval;
      if (running) {
        setRunning(true);
        interval = setInterval(() => {
          let new_time = new Date();
          setTime(new_time - start_time);
        }, 10);
      } else if (!running) {
        setRunning(false);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [running]);
    return (
        <div className="stopwatch">
          <div className="numbers">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor(((time / 10) % 100))).slice(-2)}</span>
          </div>
          {() => (glob[0]=time)}
        </div>
    );
  };

export default Stopwatch;