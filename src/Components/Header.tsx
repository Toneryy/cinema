import React, { useState } from 'react'; 
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as Icon } from '../data/mainPage/menuIcon.svg';
import s from '../styles/Header/header.module.css';
import logo from '../data/mainPage/logo.png';
import search from '../data/mainPage/search.png';
import profileIcon from '../data/mainPage/profile.png';
import SearchModal from './Search/SearchModal';

interface HeaderProps {
  heroRef: React.RefObject<HTMLDivElement>;
  isAuthenticated: boolean; // Добавляем пропс для авторизации
}

const Header: React.FC<HeaderProps> = ({ heroRef, isAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSubscribeClick = () => {
    if (location.pathname === '/') {
      heroRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        heroRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  const handleOpenSearch = () => {
    setSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={s.header}>
      <div className={s.headerLine}>
        <a href="/" className={s.logo}>
          <img src={logo} alt="logotype" />
        </a>

        <button className={s.burgerButton} onClick={toggleMenu}>
          <Icon />
        </button>

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
            {/* Используем переданный пропс isAuthenticated для проверки авторизации */}
            {isAuthenticated ? (
              <img 
                src={profileIcon} 
                alt="Profile" 
                className={s.profileIcon}
                onClick={() => navigate('/profile')} 
              />
            ) : (
              <button className={s.loginBtn} onClick={() => navigate('/login')}>Sign In</button>
            )}
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
    </header>
  );
};

export default Header;
