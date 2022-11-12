import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//import Menu from './Components/Menu';
//import Carrusel from './Components/Carrusel';
//import Cartas from './Components/Cartas';
//import Footer from './Components/Footer';
//import MedicamentosEditar from './Components/MedicamentosEditar';
//import Medicamentos from './Components/Medicamentos';
//import Promociones from './Components/Promociones';
//import PromocionesEditar from './Components/PromocionesEditar';
//import Principal from './Components/Principal';
import Login from './Components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
