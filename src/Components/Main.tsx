import React from 'react';
import s from '../styles/App.module.css';
import Intro from './Intro';
import Movies from './Movies';
import LatestNews from './LatestNews';
import FAQ from './FAQ';
import Hero from './Hero';

interface Article {
  title: string;
  text: string;
  image: string;
  link: string;
}

interface MainProps {
  heroRef: React.RefObject<HTMLElement>;
  articles: Article[];
}

const Main: React.FC<MainProps> = ({ heroRef, articles }) => {
  return (
    <main className={s.main}>
      <Intro articles={articles} />
      <Movies />
      <LatestNews />
      <FAQ />
      <Hero ref={heroRef} />
    </main>
  );
};

export default Main;
