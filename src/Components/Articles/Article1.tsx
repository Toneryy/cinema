// Article1.tsx

import React, { useState, useEffect, useRef } from 'react';
import ArticleIntro from './ArticleIntro';
import Description from './Description';
import ArticleMovies from './ArticleMovies';
import Trailer from './Trailer';
import Hero from '../Hero';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../../Logic/navigateActions'; // Импортируем логику прокрутки

import s from "../../styles/App.module.css"

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
  const [Title, setTitle] = useState<string>(moviesData[5].title); // Начальное состояние для заголовка
  const [isTrailerVisible, setTrailerVisible] = useState<boolean>(false); // Состояние для видимости трейлера
  const trailerRef = useRef<HTMLDivElement | null>(null); // Реф для трейлера
  const location = useLocation();

  // Эффект для автоматической прокрутки к трейлеру, если в URL есть query-параметр `trailer=true`
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('trailer') === 'true') {
      scrollToSection(trailerRef); // Прокрутка при загрузке
      setTrailerVisible(true); // Устанавливаем трейлер как видимый
    }
  }, [location.search]);

  const handleSelectMovie = (movieTitle: string) => {
    setTitle(movieTitle); // Устанавливаем заголовок выбранного фильма
    setTrailerVisible(true); // Делаем трейлер видимым
    scrollToSection(trailerRef); // Прокручиваем к трейлеру
  };

  return (
    <main className={s.main}>
      <ArticleIntro Title={Title} />
      <Description />
      <ArticleMovies onSelectMovie={handleSelectMovie} moviesData={moviesData} />
      {/* Секция с трейлером */}
      <div ref={trailerRef}>
        <Trailer 
          videoSrc="https://www.youtube.com/watch?v=sZqOrsMLh80" 
          Title={Title} 
          isVisible={isTrailerVisible} // Передаем состояние видимости
        />      
      </div>
      <Hero />
    </main>
  );
};

export default Article1;
