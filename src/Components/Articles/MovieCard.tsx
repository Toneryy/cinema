import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Articles/movieCard.module.css';

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

interface MovieCardProps {
  movie: Movie;
  onClick: (title: string) => void; // Функция для передачи заголовка
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick(movie.title); // Вызываем функцию и передаем заголовок
    navigate(`/article${movie.id}`); // Переход на страницу статьи
  };

  return (
    <div 
      className={styles.movieCard} 
      onClick={handleClick} 
      style={{ backgroundImage: `url(${movie.image})` }} 
    >
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;
