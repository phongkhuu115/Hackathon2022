import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingHeader from './components/LandingHeader';
import LandingSection1 from './components/LandingSection1';
import LandingSection2 from './components/LandingSection2';
import LandingSection3 from './components/LandingSection3';
import './index.css';
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
      <Route path='/' element={<LandingHeader />}>
        <Route index element={<><LandingSection1></LandingSection1><LandingSection2></LandingSection2><LandingSection3></LandingSection3></>} />
      </Route>
    </Routes>
  </HashRouter>
);

