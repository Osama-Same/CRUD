import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import axios from "axios";


//axios.defaults.baseURL =`http://localhost:5000/`
axios.defaults.baseURL =`https://crud123456.herokuapp.com/`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

