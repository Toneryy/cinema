import React from 'react';

import s from '../styles/App.module.css';
import Intro from './Intro';
import Movies from './Movies';
import LatestNews from './LatestNews';
import FAQ from './FAQ';
import Hero from './Hero';

interface MainProps {
  heroRef: React.RefObject<HTMLElement>;
}

const Main: React.FC<MainProps> = ({ heroRef }) => {
  return (
    <main className={s.main}>
      <Intro />
      <Movies />
      <LatestNews />
      <FAQ />
      <Hero ref={heroRef} /> {/* передаем ref */}
    </main>
  );
}

export default Main;
