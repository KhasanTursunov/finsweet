import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css";
import Home from './pages/home/HomePage'
import About from './pages/about/AboutPage'
import WhatWeDo from './pages/whatWeDo/WhatWeDoPage'
import Media from './pages/media/MediaPage'
import Contact from './pages/contact/ContactPage'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
