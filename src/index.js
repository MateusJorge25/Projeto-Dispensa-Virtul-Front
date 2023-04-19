import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './componentes/paginas/Login'
import Container from './componentes/layout/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Container />
    <Login /> */}
  </React.StrictMode>
);

