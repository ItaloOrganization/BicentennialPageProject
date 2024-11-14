import React from 'react';
import './App.css';
import backgroundImage from './Pagina.png'; // Importa la imagen como backgroundImage

function App() {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="left-section"></div>
      <div className="right-section">
        <div className="horizontal-line"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;
