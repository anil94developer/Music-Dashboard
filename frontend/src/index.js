import React from 'react';
import ReactDOM from 'react-dom/client'; 
 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Context from './Context/Context';
// Import Bootstrap CSS
// import './css/bootstrap/css/bootstrap.min.css';
// import './css/bootstrap/css/bootstrap.css.map';
// import './css/bootstrap/css/bootstrap.css';
// import './css/dist/css/AdminLTE.css';
// import './css/dist/css/AdminLTE.min.css';

// import './css/bootstrap/css/bootstrap.bundle.min.js';

// (Optional) Import Bootstrap JavaScript if needed
// import './css/bootstrap/js/bootstrap.js';
// import './css/bootstrap/js/bootstrap.min.js';
// import './css/dist/js/app.js'
// import './css/dist/js/app.min.js'
// import './css/dist/js/demo.js'



// import './css/bootstrap/js/npm.js';


 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>
);

reportWebVitals();
