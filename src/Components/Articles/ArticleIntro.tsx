// ArticleIntro.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import s from '../../styles/Articles/articleIntro.module.css';

interface IntroProps {
    Title: string;
    movieId: number;
    isAuthenticated: boolean;
    onWatchTrailer: () => void;
}

const ArticleIntro: React.FC<IntroProps> = ({ Title, movieId, isAuthenticated, onWatchTrailer }) => {
    const navigate = useNavigate();

    const handleWatchListClick = async () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Токен отсутствует");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/watchlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify({ movieId }),
            });

            if (response.ok) {
                console.log("Фильм добавлен в Watch List");
            } else {
                const data = await response.json();
                console.error(data.message);
            }
        } catch (error) {
            console.error("Ошибка добавления фильма в Watch List:", error);
        }
    };

    return (
        <section className={s.introSection}>
            <div className={s.content}>
                <h1 className={s.title}>{Title}</h1>
                <h3 className={s.subTitle}>Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan to synchronize 
                    the consciousness of humanity with a new solar system. "Solaris Synchrony" is a gripping
                </h3>
                <div className={s.buttonContainer}>
                    <button className={s.watchTrailer} onClick={onWatchTrailer}>Watch Trailer</button>
                    <button className={s.watchList} onClick={handleWatchListClick}>Watch List</button>
                </div>
            </div>
        </section>
    );
}

export default ArticleIntro;
