import './App.css';
import {AppBridge} from "./PhaserApp";
import {useState} from "react";

function App() {
  const [direction, setDirection] = useState(null)
  return (
    <div className="App">
      <AppBridge width={1000} height={1000} direction={direction} />
      <div className="control">
        <button onClick={() => setDirection('left')}>{'<'}</button>
        <button onClick={() => setDirection('up')}>{'^'}</button>
        <button onClick={() => setDirection(null)}>Stop</button>
        <button onClick={() => setDirection('down')}>{'V'}</button>
        <button onClick={() => setDirection('right')}>{'>'}</button>
      </div>
    </div>
  );
}

export default App;
