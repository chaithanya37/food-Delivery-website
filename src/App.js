import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MenuSection from './components/MenuSection';
import TopDishes from './components/TopDishes';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <MenuSection />
      <TopDishes />
      <Footer />
    </div>
  );
}

export default App;
