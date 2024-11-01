import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from '../styles/movies.module.css';
import { navigateToTrailer, navigateToArticle } from '../Logic/navigateActions';
import { RootState } from '../Redux/store';

interface Movie {
    id: number;
    title: string;
    genre: string;
    description: string;
    image: string;
}

const Movies: React.FC = () => {
    const navigate = useNavigate();
    
    // Получаем данные фильмов из Redux
    const moviesData = useSelector((state: RootState) => state.movies.movies);
    const moviesImages = useSelector((state: RootState) => state.movies.moviesImages);

    return (
        <section className={s.movieSection}>
            <h2 className={s.title}>
                Explore Our Wide Range of Movie Categories and Genres
            </h2>
            <div className={s.movieContainer}>
                {/* Большие элементы */}
                <div className={s.movieContainerLarge}>
                    {moviesData.slice(0, 2).map((movie: Movie, index: number) => (
                        <div key={movie.id} className={s.movieItemLarge}>
                            <img src={moviesImages[index]} alt={movie.title} className={s.movieImageLarge} />
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                            <div className={s.buttonContainer}>
                                <button className={s.trailerButton} onClick={() => navigateToTrailer(navigate)}>Watch Trailer</button>
                                <button className={s.moreInfoButton} onClick={() => navigateToArticle(navigate)}>More Info</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Маленькие элементы */}
                <div className={s.movieContainerSmall}>
                    {moviesData.slice(2, 5).map((movie: Movie, index: number) => ( // Обратите внимание на slice(2, 6)
                        <div key={movie.id} className={s.movieItemSmall}>
                            <img src={moviesImages[index + 2]} alt={movie.title} className={s.movieImageSmall} />
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                            <div className={s.buttonContainer}>
                                <button className={s.trailerButton} onClick={() => navigateToTrailer(navigate)}>Watch Trailer</button>
                                <button className={s.moreInfoButton} onClick={() => navigateToArticle(navigate)}>More Info</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Movies;
