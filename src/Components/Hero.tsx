import React from 'react';
import s from '../styles/hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={s.heroSection}>
      <div className="wrapper">
        <h1 className={s.heroTitle}>Unlock Your Cinematic Experience! Ready to Dive Into Movie Magic</h1>
        <p className={s.heroSubtitle}>
          Embark on a journey beyond the ordinary and unlock the door to a world where every frame tells a story and every scene is a masterpiece.
        </p>
        <div className={s.subscribeForm}>
          <input type="email" placeholder="Input email" className={s.emailInput} />
          <button className={s.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
