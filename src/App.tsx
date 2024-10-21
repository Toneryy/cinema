import React, { useRef, useState } from 'react';
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
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Обработчик для входа
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Обработчик для регистрации
  const handleRegister = () => {
    setIsAuthenticated(true); // После успешной регистрации можно автоматически аутентифицировать пользователя
  };

  return (
    <div className={s.wrapper}>
      <Router>
        <ScrollToTop />
        <Header heroRef={heroRef} isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/" element={<Main heroRef={heroRef} articles={articles} />} />
          <Route path='/faq' element={<ProtectedRoute isAuthenticated={isAuthenticated}><FAQ /></ProtectedRoute>} />
          <Route path="/article1" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Article1 moviesData={moviesData} /></ProtectedRoute>} />
          <Route path="/article2" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Article2 /></ProtectedRoute>} />
          <Route path="/article3" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Article3 /></ProtectedRoute>} />
          <Route path="/terms" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Terms /></ProtectedRoute>} />
          <Route path="/privacy" element={<ProtectedRoute isAuthenticated={isAuthenticated}><PrivacyPolicy /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
