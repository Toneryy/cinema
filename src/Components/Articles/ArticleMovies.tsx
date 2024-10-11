import React, { useState } from 'react';
import MovieCard from './MovieCard';
import styles from '../../styles/Articles/Article.module.css';

import image from '../../data/mainPage/slider/Image1.png';

interface Movie {
    id: number;
    title: string;
    genre: string;
    description: string;
    image: string;
  }
  
  const moviesData: Movie[] = [
    { id: 1, title: 'The Celestial Chiper', genre: 'Sci-Fi', description: 'In a realm where constellations...', image: image },
    { id: 2, title: 'Ephemeral Echoes', genre: 'Drama', description: 'In a world where memories...', image: image },
    { id: 3, title: 'Spectral Reverie', genre: 'Fantasy', description: 'A gifted artist discovers...', image: image },
    { id: 4, title: 'Crimson Serendipity', genre: 'Drama', description: 'Against the backdrop of...', image: image },
    { id: 5, title: 'Quantum Mirage', genre: 'Sci-Fi', description: 'A brilliant physicist...', image: image },
    { id: 6, title: 'Solaris Synchrony', genre: 'Sci-Fi', description: 'Against the backdrop of...', image: image },
  ];
  
  const genres: string[] = ['All', 'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Romance', 'Musical'];
  
  const ArticleMovies: React.FC = () => {
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
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ArticleMovies;