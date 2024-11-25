import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import $ from 'jquery';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
  
);
$(document).ready(function () {
  $('.rectangulo').hover(
    function () {
      // Reducir el tamaño, desenfocar y aplicar blanco y negro a los hermanos anteriores
      $(this).prevAll('.rectangulo').css({
        transform: 'scale(0.9)',
        filter: 'blur(2px) grayscale(100%)',
      });
      // Reducir el tamaño, desenfocar y aplicar blanco y negro a los hermanos posteriores
      $(this).nextAll('.rectangulo').css({
        transform: 'scale(0.9)',
        filter: 'blur(2px) grayscale(100%)',
      });
      // Hacer más grande el elemento en hover
      $(this).css('transform', 'scale(1.1)');
    },
    function () {
      // Restaurar todos los elementos
      $('.rectangulo').css({
        transform: 'scale(1)',
        filter: 'none',
      });
    }
  );
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
