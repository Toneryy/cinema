import 'normalize.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';

import s from './styles/App.module.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';

function App() {
  const heroRef = useRef<HTMLElement | null>(null);

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={s.wrapper}>
      <Router>
        <Header scrollToHero={scrollToHero} />
        <Routes>
          <Route path="/" element={<Main heroRef={heroRef} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;