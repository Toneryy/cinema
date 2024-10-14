import React, { useState } from 'react';
import MovieCard from './MovieCard';
import styles from '../../styles/Articles/Article.module.css';

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

interface ArticleMoviesProps {
  moviesData: Movie[]; // Массив фильмов
  onSelectMovie: (movieTitle: string) => void; // Функция для выбора фильма
}

const genres: string[] = ['All', 'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Romance', 'Musical'];

const ArticleMovies: React.FC<ArticleMoviesProps> = ({ moviesData, onSelectMovie }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  const filteredMovies = selectedGenre === 'All'
    ? moviesData
    : moviesData.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className={styles.moviesSection}>
      <h1>Explore Our Wide Range of Movie Categories and Genres</h1>
      <div className={styles.filterButtons}>
        <div className={styles.genresWrapper}>
          {genres.map((genre) => (
            <button
              key={genre}
              className={selectedGenre === genre ? styles.active : ''}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.moviesGrid}>
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onSelectMovie(movie.title)} // Вызываем функцию выбора фильма
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleMovies;
