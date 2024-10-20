import React from 'react';
import ReactDOM from 'react-dom/client'; 
 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Context from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>
);

reportWebVitals();
