import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TheWallProvider from './context/TheWallProvider';

ReactDOM.render(
  <React.StrictMode>
    <TheWallProvider>
      <App />
    </TheWallProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
