import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [conter, setCounter] = useState(30);
  let timerId;

  const handleReset = () => {
    setCounter(30);
  };

  useEffect(() => {
    timerId = setTimeout(() => {
      if (conter === 0) {
        alert("Take Off");
      } else {
        setCounter(conter - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [conter]);

  return (
    <div className="App">
      <h2>Conter : {conter}</h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
