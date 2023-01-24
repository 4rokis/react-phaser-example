import './App.css';
import {AppBridge} from "./PhaserApp";
import {useState} from "react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ArrowRightCircleIcon, ArrowLeftCircleIcon, StopCircleIcon} from '@heroicons/react/20/solid'

function App() {
  const [direction, setDirection] = useState(null)
  return (
    <div className="App">
      <AppBridge width={1000} height={1000} direction={direction} />
      <div className="control">
        <button onClick={() => setDirection('left')}><ArrowLeftCircleIcon /></button>
        <button onClick={() => setDirection('up')}><ArrowUpCircleIcon /></button>
        <button onClick={() => setDirection(null)}><StopCircleIcon /></button>
        <button onClick={() => setDirection('down')}><ArrowDownCircleIcon /></button>
        <button onClick={() => setDirection('right')}><ArrowRightCircleIcon /></button>
      </div>
    </div>
  );
}

export default App;
