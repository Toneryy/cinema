// App.tsx

import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/Login/Protection';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Article1 from './Components/Articles/Article1';
import Article2 from './Components/Articles/Article2';
import Article3 from './Components/Articles/Article3';
import FAQ from './Components/Pages/FAQ/FAQ';
import Terms from './Components/Pages/Terms and Privacy/Terms';
import PrivacyPolicy from './Components/Pages/Terms and Privacy/PrivacyPolicy';
import ScrollToTop from './Logic/scrollToTop';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import s from './styles/App.module.scss';

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
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Проверка токена при загрузке страницы
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // Если токен есть, считаем, что пользователь аутентифицирован
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        
        {/* Если пользователь не на странице login/register */}
        <Route
          path="*"
          element={
            <div className={s.wrapper}>
              <Header heroRef={heroRef} isAuthenticated={isAuthenticated} />
              <Routes>
                <Route path="/" element={<Main heroRef={heroRef} articles={articles} />} />
                <Route path='/faq' element={<ProtectedRoute isAuthenticated={isAuthenticated}><FAQ /></ProtectedRoute>} />
                <Route path="/article1" element={<Article1 moviesData={moviesData} isAuthenticated={isAuthenticated} />} />
                <Route path="/article2" element={<Article2 moviesData={moviesData} isAuthenticated={isAuthenticated} />} />
                <Route path="/article3" element={<Article3 moviesData={moviesData} isAuthenticated={isAuthenticated} />} />
                <Route path="/terms" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Terms /></ProtectedRoute>} />
                <Route path="/privacy" element={<ProtectedRoute isAuthenticated={isAuthenticated}><PrivacyPolicy /></ProtectedRoute>} />
              </Routes>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );  
};

export default App;
