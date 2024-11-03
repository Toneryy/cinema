import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import s from '../../styles/Articles/articleIntro.module.css';

interface IntroProps {
    Title: string;
    movieId: number;
    isAuthenticated: boolean; // Добавляем isAuthenticated
    onWatchTrailer: () => void;
}

const ArticleIntro: React.FC<IntroProps> = ({ Title, movieId, isAuthenticated, onWatchTrailer }) => { // Используем isAuthenticated
    const navigate = useNavigate();

    const handleWatchListClick = async () => {

        if (!isAuthenticated) {
            console.log("Пользователь не аутентифицирован, редирект на /login");
            navigate('/login');
            return;
        }

        const token = localStorage.getItem('token');
        
        if (!token) {
            console.error("Токен отсутствует");
            toast.error("Вы не аутентифицированы. Пожалуйста, войдите в систему."); 
            navigate('/login');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/watchlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ movieId }),
            });
            
            if (response.ok) {
                toast.success('Фильм добавлен в Watch List!', {
                    onClick: () => navigate('/profile'),
                    autoClose: 3000,
                });
            } else {
                const data = await response.json();
                console.error("Ошибка от сервера:", data.message); // Логируем ошибку
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Ошибка добавления фильма в Watch List:", error);
            toast.error('Произошла ошибка при добавлении фильма.');
        }
    };

    return (
        <section className={s.introSection}>
            <div className={s.content}>
                <h1 className={s.title}>{Title}</h1>
                <h3 className={s.subTitle}>
                    Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan...
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
