// Article1.tsx

import React, { useState, useEffect, useRef } from 'react';
import s from '../../styles/App.module.css';
import ArticleIntro from './ArticleIntro';
import Description from './Description';
import ArticleMovies from './ArticleMovies';
import Trailer from './Trailer';
import Hero from '../Hero';
import { useLocation } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

interface Article1Props {
  moviesData: Movie[];
}

const Article1: React.FC<Article1Props> = ({ moviesData }) => {
  const [Title, setTitle] = useState<string>(moviesData[5].title);
  const trailerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Функция для плавной прокрутки к трейлеру
  const scrollToTrailer = () => {
    if (trailerRef.current) {
      trailerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Эффект для автоматической прокрутки к трейлеру, если в URL есть query-параметр `trailer=true`
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('trailer') === 'true') {
      scrollToTrailer(); // Прокрутка при загрузке
    }
  }, [location.search]);

  const handleSelectMovie = (movieTitle: string) => {
    setTitle(movieTitle);
    scrollToTrailer();
  };

  return (
    <main className={s.main}>
      <ArticleIntro Title={Title} />
      <Description />
      <ArticleMovies onSelectMovie={handleSelectMovie} moviesData={moviesData} />
      {/* Секция с трейлером */}
      <div ref={trailerRef}>
        <Trailer videoSrc="https://www.youtube.com/watch?v=sZqOrsMLh80" Title={Title} />
      </div>
      <Hero />
    </main>
  );
};

export default Article1;
