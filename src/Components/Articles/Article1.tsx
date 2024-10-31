// Article1.tsx

import React, { useState, useEffect, useRef } from "react";
import ArticleIntro from "./ArticleIntro";
import Description from "./Description";
import ArticleMovies from "./ArticleMovies";
import Trailer from "./Trailer";
import Hero from "../Hero";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../Logic/navigateActions"; // Импортируем логику прокрутки
import s from "../../styles/App.module.scss";

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

interface Article1Props {
  moviesData: Movie[];
  isAuthenticated: boolean; // Добавляем пропс для аутентификации
}

const Article1: React.FC<Article1Props> = ({ moviesData, isAuthenticated }) => {
  const [Title, setTitle] = useState<string>(moviesData[5].title);
  const currentMovieId = moviesData[5].id;
  const [isTrailerVisible, setTrailerVisible] = useState<boolean>(false);
  const trailerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("trailer") === "true") {
      scrollToSection(trailerRef);
      setTrailerVisible(true);
    }
  }, [location.search]);

  const handleSelectMovie = (movieTitle: string) => {
    setTitle(movieTitle);
    setTrailerVisible(true);
    scrollToSection(trailerRef);
  };

  const handleWatchTrailer = () => {
    setTrailerVisible(true);
    scrollToSection(trailerRef);
  };

  return (
    <main className={s.main}>
      <ArticleIntro
        Title={Title}
        movieId={currentMovieId}
        isAuthenticated={isAuthenticated}
        onWatchTrailer={handleWatchTrailer}
      />
      <Description />
      <ArticleMovies
        onSelectMovie={handleSelectMovie}
        moviesData={moviesData}
      />
      <div ref={trailerRef}>
        <Trailer
          videoSrc="https://www.youtube.com/watch?v=sZqOrsMLh80"
          Title={Title}
          isVisible={isTrailerVisible}
        />
      </div>
      <Hero />
    </main>
  );
};

export default Article1;
