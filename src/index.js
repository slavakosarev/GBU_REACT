import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // подключение стилей глобально
import App from './App'; // подкючение функционального компонента

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // корнеывой элемент в index.html
);
