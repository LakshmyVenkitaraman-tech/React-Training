import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState(300); 
  const [timeInterval, setTimeInterval] = useState(null);
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
  if (!timeInterval && timer > 0) {
    const interval = setInterval(() => {
      setTimer(prev => prev > 1 ? prev - 1 : (clearInterval(interval), setTimeInterval(null), 0));
    }, 1000);
    setTimeInterval(interval);
  }
};

  const pauseTimer = () => {
    clearInterval(timeInterval);
    setTimeInterval(null);
  };
  const resetTimer = () => {
    clearInterval(timeInterval);
    setTimer(300); 
    setTimeInterval(null);
  };

  return (
<div className="bg-black text-pink-400 min-h-screen flex flex-col items-center justify-center">
<div className="bg-white flex flex-col items-center justify-center ">
<h3 className="text-4xl block font-semibold mb-4">Timer:{formatTime(timer)}</h3>
<div>
<button className="bg-green-300 text-white m-6 px-4 py-2 rounded hover:bg-green-400" onClick={startTimer}>Start</button>
<button className="bg-red-300 text-white m-6 px-4 py-2 rounded hover:bg-red-400" onClick={pauseTimer}>Stop</button>
<button className="bg-blue-300 text-white m-6 px-4 py-2 rounded hover:bg-blue-400" onClick={resetTimer}>Reset</button>
</div>
</div>
</div>
  );
}

export default App;
