import React, { useEffect, useState, useRef } from 'react';
import s from '../../styles/App.module.css';

import ArticleIntro from './ArticleIntro';
import ArticleMovies from './ArticleMovies';
import Trailer from './Trailer';
import Hero from '../Hero';
import { moviesData } from './ArticleMovies';
import { useLocation } from 'react-router-dom';

function Article1() {
  const [Title, setTitle] = useState<string>(moviesData[5].title);
  const trailerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Функция для плавной прокрутки к трейлеру
  const scrollToTrailer = () => {
    if (trailerRef.current) {
      trailerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Эффект, который прокручивает к трейлеру, если в URL есть query параметр `trailer=true`
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
    <div className={s.wrapper}>
      <main className={s.main}>
        <ArticleIntro Title={Title}/>
        <ArticleMovies onSelectMovie={handleSelectMovie} />
        {/* Секция с трейлером */}
        <div ref={trailerRef}>
          <Trailer videoSrc="https://www.youtube.com/watch?v=sZqOrsMLh80" Title={Title} />
        </div>
        <Hero />
      </main>
    </div>
  );
}

export default Article1;
