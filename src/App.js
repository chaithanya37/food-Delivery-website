import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routess from './components/Routess';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routess />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;