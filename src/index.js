import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingHeader from './components/landing/LandingHeader';
import LandingSection1 from './components/landing/LandingSection1';
import LandingSection2 from './components/landing/LandingSection2';
import LandingSection3 from './components/landing/LandingSection3';
import Login from './components/log/Login'
import Register from './components/log/Register';
import NewsFeed from './components/newsfeed/NewsFeed';
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
      <Route exact path="/" element={<LandingHeader />}>
        <Route index element={<><LandingSection1></LandingSection1><LandingSection2></LandingSection2><LandingSection3></LandingSection3></>} />
      </Route>
      <Route path ="/logon" index element={<Login></Login>}></Route>
      <Route path ="/signup" index element={<Register></Register>}></Route>
      <Route path ="/home" index element={<NewsFeed></NewsFeed>}></Route>
    </Routes>
  </HashRouter>
);

