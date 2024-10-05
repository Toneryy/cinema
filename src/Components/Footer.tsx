import React from 'react';
import s from '../styles/footer.module.css';

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
            <li>Home</li>
            <li>Movies</li>
            <li>Tv Shows</li>
            <li>Reedem</li>
          </ul>

          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Investors</li>
            <li>Contact Us</li>
          </ul>

          <ul>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Media Center</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>

        <div className={s.socials}>
          <h4>Stay up to date</h4>
          <div className={s.socialIcons}>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>

      <div className={s.footerBottom}>
        <p>© 2023 Mostream all rights reserved</p>
        <div className={s.footerLinks}>
          <a href="#">Terms and condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
