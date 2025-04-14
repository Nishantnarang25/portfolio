import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home"
import Contact from './pages/Contact';
import Footer from './components/Footer';

import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
   
  )
}

export default App

