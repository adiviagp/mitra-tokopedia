import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Transaksi from './pages/Transaksi';
import Bantuan from './pages/Bantuan';
import Akun from './pages/Akun';
import './App.css';
import Navbar from './components/Navbar';

import Header from './components/Header';

function App() {
  const [isScrolled, setIsScrolled] = useState();

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Header isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={<Beranda />} exact />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/bantuan" element={<Bantuan />} />
          <Route path="/akun" element={<Akun />} />
        </Routes>

        <Navbar />
      </div>
    </>
  );
}

export default App;
