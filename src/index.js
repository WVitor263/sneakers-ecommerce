import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa o componente principal

// 1. Seleciona a div "root" do HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Renderiza o App dentro dela
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);