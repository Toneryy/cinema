import React from 'react';
import s from '../styles/Footer/footer.module.css';

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
            <li><a href="/#">Home</a></li> {/* Добавил действительный href */}
            <li><a href="/movies">Movies</a></li>
            <li><a href="/tv-shows">Tv Shows</a></li>
            <li><a href="/reedem">Reedem</a></li>
          </ul>

          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/investors">Investors</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>

          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/media-center">Media Center</a></li>
            <li><a href="/cookie-preferences">Cookie Preferences</a></li>
          </ul>
        </div>

        <div className={s.socials}>
          <h4>Stay up to date</h4>
          <div className={s.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> {/* Указал действительные ссылки */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>

      <div className={s.footerBottom}>
        <p>© 2023 Mostream all rights reserved</p>
        <div className={s.footerLinks}>
          <a href="/terms">Terms and conditions</a> {/* Указал действительные ссылки */}
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
