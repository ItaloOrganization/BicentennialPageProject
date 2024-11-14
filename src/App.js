import React from 'react';
import './App.css';
import backgroundImage from './Pagina.png'; // Importa la imagen como backgroundImage

function App() {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    </div>
  );
}

export default App;
