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
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article${movie.id}`);
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
