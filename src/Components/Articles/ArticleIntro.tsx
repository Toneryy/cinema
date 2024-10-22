// ArticleIntro.tsx

import React from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import s from '../../styles/Articles/articleIntro.module.css';

interface IntroProps {
    Title: string;
    isAuthenticated: boolean; // Пропс для аутентификации
    onWatchTrailer: () => void; // Пропс для обработки нажатия на кнопку "Watch Trailer"
    onAddToWatchList: () => void; // Пропс для обработки нажатия на кнопку "Watch List"
}

const ArticleIntro: React.FC<IntroProps> = ({ Title, isAuthenticated, onWatchTrailer, onAddToWatchList }) => {
    const navigate = useNavigate();

    const handleWatchListClick = () => {
        if (isAuthenticated) {
            // Здесь добавьте логику для добавления в "Watch List"
            console.log("Добавлено в список просмотра!"); // Замените на вашу логику
        } else {
            navigate('/login'); // Перенаправляем на страницу логина
        }
    };

    return (
        <section className={s.introSection}>
            <div className={s.content}>
                <h1 className={s.title}>
                    {Title}
                </h1>
                <h3 className={s.subTitle}>
                    Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan to synchronize 
                    the consciousness of humanity with a new solar system. "Solaris Synchrony" is a gripping 
                </h3>
                <div className={s.buttonContainer}>
                    <button className={s.watchTrailer} onClick={onWatchTrailer}>Watch Trailer</button>
                    <button className={s.watchList} onClick={handleWatchListClick}>Watch List</button> {/* Добавляем обработчик */}
                </div>
            </div>
        </section>
    );
}

export default ArticleIntro;
