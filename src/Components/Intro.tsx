import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from '../styles/intro.module.css';
import Image1 from '../data/mainPage/slider/Image1.png';
import Image2 from '../data/mainPage/slider/Image2.png';
import Image3 from '../data/mainPage/slider/Image3.png';

const articles = [
  {
    title: "Solaris Synchrony: a Celestial Odyssey of Hope and Harmony",
    text: "Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan...",
    image: Image1,
    link: "/article1"
  },
  {
    title: "The Martian's Struggle for Survival",
    text: "Follow the lone survivor's fight to return home from Mars after a catastrophic mission failure...",
    image: Image2,
    link: "/article2"
  },
  {
    title: "Journey to the Heart of the Black Hole",
    text: "An interstellar adventure through time and space to uncover the mysteries of the universe's darkest realm...",
    image: Image3,
    link: "/article3"
  }
];

const Intro: React.FC = () => {
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
  }, [autoSlide]);

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
        <h1 className={s.title} onClick={() => handleTitleClick(articles[currentSlide].link)}>{articles[currentSlide].title}</h1>
        <p className={s.subtitle}>{articles[currentSlide].text}</p>
        <div className={s.buttonContainer}>
          <button className={s.watchTrailer}>Watch Trailer</button>
          <button className={s.moreInfo}>More Info</button>
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
