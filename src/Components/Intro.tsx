import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from '../styles/intro.module.css';
import { navigateToTrailer, navigateToArticle, navigateToLink } from '../Logic/navigateActions';
import { RootState } from '../Redux/store';

// Определите интерфейс Article
interface Article {
    title: string;
    text: string;
    image: string;
    link: string;
}

interface IntroProps {
    articles: Article[];
}

const Intro: React.FC<IntroProps> = ({ articles }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const slideTimer = setInterval(() => {
            if (autoSlide) {
                setCurrentSlide((prev) => (prev + 1) % articles.length);
            }
        }, 3000);

        return () => clearInterval(slideTimer);
    }, [autoSlide, articles.length]);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % articles.length);
        setAutoSlide(false);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
        setAutoSlide(false);
    };

    return (
        <section className={s.introSection}>
            <div className={s.description}>
                <h1 className={s.title} onClick={() => navigateToLink(navigate, articles[currentSlide].link)}>
                    {articles[currentSlide].title}
                </h1>
                <p className={s.subtitle}>{articles[currentSlide].text}</p>
                <div className={s.buttonContainer}>
                    <button className={s.watchTrailer} onClick={() => navigateToTrailer(navigate)}>
                        Watch Trailer
                    </button>
                    <button className={s.moreInfo} onClick={() => navigateToArticle(navigate)}>
                        More Info
                    </button>
                </div>
                <div className={s.sliderControls}>
                    <button onClick={handlePrevSlide} className={s.prev}>◀</button>
                    <button onClick={handleNextSlide} className={s.next}>▶</button>
                </div>
            </div>
            <div className={s.photoContainer}>
                <img src={articles[currentSlide].image} alt="Slide" width="592px" height="438px" />
            </div>
        </section>
    );
};

export default Intro;
