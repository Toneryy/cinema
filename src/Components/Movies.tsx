import React from "react";
import { useNavigate } from 'react-router-dom';
import s from '../styles/movies.module.css';

import Image1 from '../data/mainPage/moviesImg/Image1.png';
import Image2 from '../data/mainPage/moviesImg/Image2.png';
import Image3 from '../data/mainPage/moviesImg/Image3.png';
import Image4 from '../data/mainPage/moviesImg/Image4.png';
import Image5 from '../data/mainPage/moviesImg/Image5.png';

const Movies: React.FC = () => {
    const navigate = useNavigate(); // Хук для навигации

    const handleWatchTrailer = () => {
        navigate('/article1?trailer=true');  // Переход с query параметром
    };

    const handleMoreInfo = () => {
        navigate('/article1');  // Переход на страницу Article1
    };

    return (
        <section className={s.movieSection}>
            <h2 className={s.title}>
                Explore Our Wide Range of Movie Categories and Genres
            </h2>
            <div className={s.movieContainer}>
                {/* Большие элементы */}
                <div className={s.movieContainerLarge}>
                    <div className={s.movieItemLarge}>
                        <img src={Image1} alt="Spectral Riveierie" className={s.movieImageLarge} />
                        <h3>Spectral Riveierie</h3>
                        <p>A gifted artist discovers the ability to bring her dreams to life through her paintings...</p>
                        <div className={s.buttonContainer}>
                            <button className={s.trailerButton} onClick={handleWatchTrailer}>Watch Trailer</button>
                            <button className={s.moreInfoButton} onClick={handleMoreInfo}>More Info</button>
                        </div>
                    </div>
                    <div className={s.movieItemLarge}>
                        <img src={Image2} alt="Quantum Mirage" className={s.movieImageLarge} />
                        <h3>Quantum Mirage</h3>
                        <p>A brilliant physicist stumbles upon a groundbreaking discovery that challenges reality...</p>
                        <div className={s.buttonContainer}>
                            <button className={s.trailerButton} onClick={handleWatchTrailer}>Watch Trailer</button>
                            <button className={s.moreInfoButton} onClick={handleMoreInfo}>More Info</button>
                        </div>
                    </div>
                </div>
                {/* Маленькие элементы */}
                <div className={s.movieContainerSmall}>
                    <div className={s.movieItemSmall}>
                        <img src={Image3} alt="Ephemeraal Echoes" className={s.movieImageSmall} />
                        <h3>Ephemeraal Echoes</h3>
                        <p>In a world where memories are fleeting and time is delicate, a group of individuals struggles...</p>
                        <div className={s.buttonContainer}>
                            <button className={s.trailerButton} onClick={handleWatchTrailer}>Watch Trailer</button>
                            <button className={s.moreInfoButton} onClick={handleMoreInfo}>More Info</button>
                        </div>
                    </div>
                    <div className={s.movieItemSmall}>
                        <img src={Image4} alt="Celestial Cipier" className={s.movieImageSmall} />
                        <h3>Celestial Cipier</h3>
                        <p>In a realm where constellations hold the secrets of the universe, a group of unlikely heroes...</p>
                        <div className={s.buttonContainer}>
                            <button className={s.trailerButton} onClick={handleWatchTrailer}>Watch Trailer</button>
                            <button className={s.moreInfoButton} onClick={handleMoreInfo}>More Info</button>
                        </div>
                    </div>
                    <div className={s.movieItemSmall}>
                        <img src={Image5} alt="Solaris Synchrony" className={s.movieImageSmall} />
                        <h3>Solaris Synchrony</h3>
                        <p>Against the backdrop of a dying Earth, a group of scientists races to execute one last experiment...</p>
                        <div className={s.buttonContainer}>
                            <button className={s.trailerButton} onClick={handleWatchTrailer}>Watch Trailer</button>
                            <button className={s.moreInfoButton} onClick={handleMoreInfo}>More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Movies;
