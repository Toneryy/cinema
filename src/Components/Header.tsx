// Header.tsx

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import s from '../styles/Header/header.module.css';

import logo from '../data/mainPage/logo.png';
import search from '../data/mainPage/search.png';
import SearchModal from './Search/SearchModal'; // Импортируй новый компонент

interface HeaderProps {
  scrollToHero: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToHero }) => {
  const navigate = useNavigate();
  const [isSearchOpen, setSearchOpen] = useState(false); // Состояние для управления модальным окном поиска

  const handleSubscribeClick = () => {
    scrollToHero(); // Прокрутка до Hero
  };

  const handleOpenSearch = () => {
    setSearchOpen(true); // Открытие модального окна поиска
  };

  const handleCloseSearch = () => {
    setSearchOpen(false); // Закрытие модального окна поиска
  };

  return (
    <header className={s.header}>
      <div className={s.headerLine}>
        <a href="/" className={s.logo}>
          <img src={logo} alt="logo.png" />
        </a>
        <nav className={s.nav}>
          <ul>
            <li>Home</li>
            <li>Live</li>
            <li>TV Shows</li>
            <li>Movies</li>
          </ul>
        </nav>
        <div className={s.buttonContainer}>
          <button className={s.searchBtn} onClick={handleOpenSearch}><img src={search} alt="search" /></button>
          <button className={s.subscribeBtn} onClick={handleSubscribeClick}>Subscribe</button>
          <button className={s.loginBtn} onClick={() => navigate('/login')}>Sign In</button>
        </div>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} /> {/* Добавление модального окна поиска */}
    </header>
  );
};

export default Header;