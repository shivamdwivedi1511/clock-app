import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // console.log(timestamp.getSeconds());
    const root = document.documentElement;
        root?.style.setProperty(
            "--angle",
            `${timestamp.getSeconds()*6}deg`
        );
  }, [timestamp])
  

  return (
    <div className="app">
      <div className="container">
        <div className="tick">
          <div className="secondtick"></div>
        </div>
        <p className="time">{timestamp.toLocaleTimeString({}, { hourCycle: "h12" })}</p>
      </div>
    </div>
  );
}

export default App;
