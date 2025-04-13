import React from "react";
import "./App.css";
import { useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animateProgress, setAnimateProgress] = useState(null);
  useState(() => {
    let timer = setTimeout(() => {
      setAnimateProgress(progress);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [setAnimateProgress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          color: animateProgress <= 10 ? "red" : "white",
          transform: `translateX(${animateProgress - 100}%)`,
        }}
      >
        {animateProgress}%
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      ProgressBar
      <ProgressBar progress={60} />
    </div>
  );
};

export default App;
