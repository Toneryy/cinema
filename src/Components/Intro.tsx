import React from 'react';
import s from '../styles/intro.module.css';

import mainPage from '../data/mainPage/mainPage.png'

const Intro: React.FC = () => {
  return (
    <section className={s.introSection}>
      <div className={s.description}>
        <h1 className={s.title}>
          Solaris Synchrony: a Celestial Odyssey of Hope and Harmony
        </h1>
        <p className={s.subtitle}>
          Against the backdrop of a dying Earth, a group of scientists races to 
          execute a daring plan to synchronize the consciousness of humanity 
          with a new solar system. "Solaris Synchrony" is a gripping tale of 
          sacrifice, hope, and the unyielding spirit of exploration.
        </p>
        <div className={s.buttonContainer}>
          <button className={s.watchTrailer}>Watch Trailer</button>
          <button className={s.moreInfo}>More Info</button>
        </div>
      </div>
      <div className={s.photoContainer}>
        <img src={mainPage} alt="Main" width="592px" height="458px" />
      </div>
    </section>
  );
};

export default Intro;
