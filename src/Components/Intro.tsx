import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from '../styles/intro.module.css';

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
  const navigate = useNavigate(); // Хук для навигации

  const handleWatchTrailer = () => {
      navigate('/article1?trailer=true');  // Переход с query параметром
  };

  const handleMoreInfo = () => {
      navigate('/article1');  // Переход на страницу Article1
  };

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

  const handleTitleClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className={s.introSection}>
      <div className={s.description}>
        <h1 className={s.title} onClick={() => handleTitleClick(articles[currentSlide].link)}>
          {articles[currentSlide].title}
        </h1>
        <p className={s.subtitle}>{articles[currentSlide].text}</p>
        <div className={s.buttonContainer}>
          <button className={s.watchTrailer} onClick={handleWatchTrailer}>Watch Trailer</button>
          <button className={s.moreInfo} onClick={handleMoreInfo}>More Info</button>
        </div>
        <div className={s.sliderControls}>
          <button onClick={handlePrevSlide} className={s.prev}>◀</button>
          <button onClick={handleNextSlide} className={s.next}>▶</button>
        </div>
      </div>
      <div className={s.photoContainer}>
        <img src={articles[currentSlide].image} alt="Slide" width="592px" height="458px" />
      </div>
    </section>
  );
};

export default Intro;
