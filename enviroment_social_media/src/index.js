import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingHeader from './components/LandingHeader';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={ <LandingHeader/>}>

      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
