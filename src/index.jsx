// NOVO CÓDIGO PARA VITE
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação correta para o Vite
import App from './App.jsx';
import '/src/global.css'; // Certifique-se de que o caminho está correto

// Cria uma "raiz" do aplicativo
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o aplicativo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);