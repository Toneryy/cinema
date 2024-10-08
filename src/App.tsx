import 'normalize.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';

import s from './styles/App.module.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import Article1 from './Components/Articles/Article1';
import Article2 from './Components/Articles/Article2';
import Article3 from './Components/Articles/Article3';

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
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
