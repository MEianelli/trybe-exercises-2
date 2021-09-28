import './App.css';
import { useState } from 'react';
import RandomNumber from './RandomNumber';

function App() {
  const [showDisplay, setShowDisplay] = useState(true);

  function handleToggleButton() {
    setShowDisplay(!showDisplay)
  }

  return (
    <div className="App">
      <button type="button"
        onClick={ handleToggleButton }
      >{ showDisplay ? `HIDE DISPLAY` : `SHOW DISPLAY`}</button>
      { showDisplay ? <RandomNumber/> : "DEATH"}
    </div>
  );
}

export default App;
