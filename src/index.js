import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import LandingHeader from './components/landing/LandingHeader';
import AboutSection from './components/landing/AboutSection';
import HomeSection from './components/landing/HomeSection';
import ProductSection from './components/landing/ProductSection';
import ContactSection from './components/landing/ContactSection';
import Login from './components/log/Login'
import Register from './components/log/Register';
import NewsFeed from './components/newsfeed/NewsFeed';
import Profile from './components/profile/Profile';
import Exchange from './components/newsfeed/Exchange'
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
        <Route index element={<><HomeSection></HomeSection><AboutSection></AboutSection><ProductSection></ProductSection><ContactSection></ContactSection></>} />
      </Route>
      <Route path="/logon" index element={<Login></Login>}></Route>
      <Route path="/signup" index element={<Register></Register>}></Route>
      <Route path="/home" index element={<NewsFeed></NewsFeed>}></Route>
      <Route path="/profile" index element={<Profile></Profile>}></Route>
      <Route path="/exchange" index element={<Exchange></Exchange>}></Route>
    </Routes>
  </HashRouter>
);

