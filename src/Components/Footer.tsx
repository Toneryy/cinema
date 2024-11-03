import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../styles/Footer/footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footerSection}>
      <div className={s.footerContent}>
        <div className={s.logoDescription}>
          <h2>Mostream</h2>
          <p>
            where every frame tells a story, and every click opens the door to a world of limitless entertainment.
            Immerse yourself in a universe of unparalleled movie.
          </p>
        </div>

        <div className={s.links}>
          <ul>
            <li><NavLink to="/" className={s.link}>Home</NavLink></li>
            <li><NavLink to="/movies" className={s.link}>Movies</NavLink></li>
            <li><NavLink to="/tv-shows" className={s.link}>TV Shows</NavLink></li>
            <li><NavLink to="/subscription" className={s.link}>Subscription</NavLink></li>
          </ul>

          <ul>
            <li><NavLink to="/about" className={s.link}>About</NavLink></li>
            <li><NavLink to="/career" className={s.link}>Career</NavLink></li>
            <li><NavLink to="/investors" className={s.link}>Investors</NavLink></li>
            <li><NavLink to="/contact" className={s.link}>Contact Us</NavLink></li>
          </ul>

          <ul>
            <li><NavLink to="/faq" className={s.link}>FAQ</NavLink></li>
            <li><NavLink to="/help-center" className={s.link}>Help Center</NavLink></li>
            <li><NavLink to="/media-center" className={s.link}>Media Center</NavLink></li>
            <li><NavLink to="/cookie-preferences" className={s.link}>Cookie Preferences</NavLink></li>
          </ul>
        </div>

        <div className={s.socials}>
          <h4 className={s.socialTitle}>Stay up to date</h4>
          <div className={s.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>

      <div className={s.footerBottom}>
        <p>© 2023 Mostream all rights reserved</p>
        <div className={s.footerLinks}>
          <NavLink to="/terms" className={s.link}>Terms and conditions</NavLink>
          <NavLink to="/privacy" className={s.link}>Privacy Policy</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
