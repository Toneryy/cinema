import React, { useState, useEffect, useRef } from "react";
import ArticleIntro from "./ArticleIntro";
import Description from "./Description";
import ArticleMovies from "./ArticleMovies";
import Trailer from "./Trailer";
import Hero from "../Hero";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../Logic/navigateActions";
import { Movie } from "../../Redux/types"; // Убедитесь, что импортируете Movie, если нужно
import s from "../../styles/App.module.scss";

interface Article1Props {
    moviesData: Movie[]; // Добавляем moviesData
    isAuthenticated: boolean; // Добавляем isAuthenticated
}

const Article1: React.FC<Article1Props> = ({ moviesData, isAuthenticated }) => {
    // Ваш код остается прежним
    const [Title, setTitle] = useState<string>(moviesData[0]?.title || '');
    const currentMovieId = moviesData[0]?.id || 0;
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
                isAuthenticated={isAuthenticated} // Передаем isAuthenticated
                onWatchTrailer={handleWatchTrailer}
            />
            <Description />
            <ArticleMovies
                onSelectMovie={handleSelectMovie}
                moviesData={moviesData} // Передаем moviesData
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
