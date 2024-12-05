import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import OtherPage from './OtherPage';
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="top-section">
          <div className="horizontal-line"></div>
          <div className="circle"></div>
          <div className="circlee"></div>
        </div>
        <div className="bottom-section">
          <div
            className="lorem-text"
            style={{
              fontSize: '23px',
              color: 'white',
            }}
          >
            Desde Sucre, ciudad blanca de los 4 nombres, cuna de la libertad latinoamericana, la<br />
            CAINCO Chuquisaca, te rinde homenaje de emprendimiento, empleo y oportunidad.
          </div>
          <div className="Contenedor-Rectangulos">
            <div
              className="rectangulo"
              onClick={() => navigate('/other-page')}
              style={{ cursor: 'pointer' }}
            >
              <div className="inner"></div>
              <div className="border-only">
                <div className="top">
                  <div className="left"></div>
                  <div className="right">
                    <div className="top-half"></div>
                    <div className="bottom-half"></div>
                  </div>
                </div>
                <div className="bottom"></div>
              </div>
              <div className="productos">NUESTROS PRODUCTOS</div>
            </div>

            <div
              className="rectangulo"
              onClick={() => navigate('/other-page')}
              style={{ cursor: 'pointer' }}
            >
              <div className="inner"></div>
              <div className="border-only">
                <div className="top">
                  <div className="left"></div>
                  <div className="right">
                    <div className="top-half"></div>
                    <div className="bottom-half"></div>
                  </div>
                </div>
                <div className="bottom"></div>
              </div>
              <div className="productos">NUESTROS PRODUCTOS</div>
            </div>

            <div
              className="rectangulo"
              onClick={() => navigate('/other-page')}
              style={{ cursor: 'pointer' }}
            >
              <div className="inner"></div>
              <div className="border-only">
                <div className="top">
                  <div className="left"></div>
                  <div className="right">
                    <div className="top-half"></div>
                    <div className="bottom-half"></div>
                  </div>
                </div>
                <div className="bottom"></div>
              </div>
              <div className="productos">NUESTROS PRODUCTOS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
