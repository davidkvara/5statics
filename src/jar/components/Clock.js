import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div className="clock-widget">
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      })}
    </div>
  );
};

export default Clock;
