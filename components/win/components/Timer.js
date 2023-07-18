import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(4);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (minutes === 0) {
        setMinutes(4);
      }
    }, 1000);
  });

  return (
    <div>
      <h1 style={{ color: '#FF7152' }}>
        {minutes}:{seconds}
      </h1>
    </div>
  );
};

export default Timer;
