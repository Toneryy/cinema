import React from 'react';
import s from '../styles/intro.module.css';

const Intro: React.FC = () => {
  return (
    <section className={s.movieSection}>
        <div className={s.description}>
          <h1 className={s.title}>
            Solaris Synchrony: a Celestial Odyssey of Hope and Harmony
          </h1>
          <h3 className={s.subtitle}>
            Against the backdrop of a dying Earth, a group of scientists races to 
            execute a daring plan to synchronize the consciousness of humanity 
            with a new solar system. "Solaris Synchrony" is a gripping tale of 
            sacrifice, hope, and the unyielding spirit of exploration.
          </h3>
          <div className={s.buttonContainer}>
            <button className={s.watchTrailer}>Watch Trailer</button>
            <button className={s.moreInfo}>More Info</button>
          </div>
        </div>
    </section>
  );
};

export default Intro;
