import React, { useState } from 'react'; 
import { NavLink, useNavigate } from 'react-router-dom';
import { ReactComponent as Icon } from '../data/mainPage/menuIcon.svg';
import s from '../styles/Header/header.module.css';
import logo from '../data/mainPage/logo.png';
import search from '../data/mainPage/search.png';
import SearchModal from './Search/SearchModal';

interface HeaderProps {
  scrollToHero: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToHero }) => {
  const navigate = useNavigate();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // Состояние для меню

  const handleSubscribeClick = () => {
    scrollToHero();
  };

  const handleOpenSearch = () => {
    setSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Открытие/закрытие меню
  };

  return (
    <header className={s.header}>
      <div className={s.headerLine}>
        <a href="/" className={s.logo}>
          <img src={logo} alt="logo.png" />
        </a>

        <button className={s.burgerButton} onClick={toggleMenu}>
          <Icon />
        </button>

        {/* Добавляем обертку для навигации и кнопок */}
        <div className={`${s.menuContainer} ${isMenuOpen ? s.open : ''}`}>
          <nav className={s.nav}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/live">Live</NavLink></li>
              <li><NavLink to="/tv-shows">TV Shows</NavLink></li>
              <li><NavLink to="/movies">Movies</NavLink></li>
            </ul>
          </nav>
          <div className={s.buttonContainer}>
            <button className={s.searchBtn} onClick={handleOpenSearch}><img src={search} alt="search" /></button>
            <button className={s.subscribeBtn} onClick={handleSubscribeClick}>Subscribe</button>
            <button className={s.loginBtn} onClick={() => navigate('/login')}>Sign In</button>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
    </header>
  );
};

export default Header;
