import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import $ from 'jquery';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, getDocs, getCollections } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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
  const firebaseConfig = {
    apiKey: "AIzaSyCr8n3XeJh1jBjJGWKZZGjvVxP6Q_AD758",
    authDomain: "webbicentenario-a071e.firebaseapp.com",
    projectId: "webbicentenario-a071e",
    storageBucket: "webbicentenario-a071e.firebasestorage.app",
    messagingSenderId: "923693123936",
    appId: "1:923693123936:web:3e0662be8f9796ed917605"
  };

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Función para confirmar la conexión con Firebase y mostrar colecciones
  async function checkConnection() {
    try {
      console.log("Conexión exitosa a Firebase Firestore");

      // Obtener los documentos de una colección específica (por ejemplo, "Cards")
      const querySnapshot = await getDocs(collection(db, "Cards"));
      
      if (!querySnapshot.empty) {
        let collectionsList = [];
        
        querySnapshot.forEach((doc) => {
          collectionsList.push(doc.id); // Añadir el ID del documento como referencia
        });

        // Mostrar los documentos en la colección "Cards"
        alert("Documentos en la colección 'Cards': " + collectionsList.join(", "));
      } else {
        alert("No se encontraron documentos en la colección 'Cards'.");
      }
    } catch (error) {
      console.error("Error al conectar con Firestore: ", error);
    }
  }
  
  // Llamar la función para verificar la conexión
  checkConnection();
  
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
