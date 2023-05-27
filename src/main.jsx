import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import GlobalStyle from '../src/style/GlobalStyle.js';
import ResetStyle from '../src/style/ResetStyle.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <ResetStyle />
    <GlobalStyle />
    <App />

  </React.StrictMode>

);
