import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Article1 from './Components/Articles/Article1';
import Article2 from './Components/Articles/Article2';
import Article3 from './Components/Articles/Article3';
import FAQ from './Components/Pages/FAQ/FAQ';

import s from './styles/App.module.css';

interface Article {
  title: string;
  text: string;
  image: string;
  link: string;
}

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

interface AppProps {
  articles: Article[];
  moviesData: Movie[];
}

const App: React.FC<AppProps> = ({ articles, moviesData }) => {
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
          <Route path="/" element={<Main heroRef={heroRef} articles={articles} />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path="/article1" element={<Article1 moviesData={moviesData} />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
