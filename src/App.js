import React, { useState } from 'react';
import './App.css';
import Popup from './components/Popup/Popup';


const App = () => {
  const [popupDisabled, setPopupDisabled] = useState(false)
  return (
    <div className="App">
      <div className="btn-wrapper">
        <button className="btn-open-popup" onClick={() => setPopupDisabled(true)}>Налоговый вычет</button>
      </div>
      <Popup disabled={popupDisabled} setDisabled={setPopupDisabled} />
    </div>
  );
}

export default App;
