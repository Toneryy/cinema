import React from 'react'; 
import s from '../styles/header.module.css';

import logo from '../data/mainPage/logo.png';
import search from '../data/mainPage/search.png';


const Header: React.FC = () => {
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
            <button className={s.searchBtn}><img src={search} alt="search"/></button>
            <button className={s.subscribeBtn}>Subscribe</button>
            <button className={s.loginBtn}>Sign In</button>
          </div>
        </div>
      </header>
    );
};

export default Header;