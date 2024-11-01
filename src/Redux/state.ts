// state.ts
import Image1 from '../data/mainPage/slider/Image1.png';
import Image2 from '../data/mainPage/slider/Image2.png';
import Image3 from '../data/mainPage/slider/Image3.png';

import MovieImage1 from '../data/mainPage/moviesImg/Image1.png';
import MovieImage2 from '../data/mainPage/moviesImg/Image2.png';
import MovieImage3 from '../data/mainPage/moviesImg/Image3.png';
import MovieImage4 from '../data/mainPage/moviesImg/Image4.png';
import MovieImage5 from '../data/mainPage/moviesImg/Image5.png';

const moviesImages = [
  MovieImage1,
  MovieImage2,
  MovieImage3,
  MovieImage4,
  MovieImage5,
];

const articles = [
  {
    title: "Solaris Synchrony: a Celestial Odyssey of Hope and Harmony",
    text: "Against the backdrop of a dying Earth...",
    image: Image3,
    link: "/article1",
  },
  {
    title: "The Martian's Struggle for Survival",
    text: "Follow the lone survivor's fight to return home from Mars...",
    image: Image2,
    link: "/article2",
  },
  {
    title: "Journey to the Heart of the Black Hole",
    text: "An interstellar adventure through time and space...",
    image: Image1,
    link: "/article3",
  },
];

const moviesData = [
  {
    id: 1,
    title: "Solaris Synchrony",
    genre: "Sci-Fi",
    description: "Against the backdrop of...",
    image: Image3,
  },
  {
    id: 2,
    title: "Ephemeral Echoes",
    genre: "Drama",
    description: "In a world where memories...",
    image: Image1,
  },
  {
    id: 3,
    title: "Spectral Reverie",
    genre: "Fantasy",
    description: "A gifted artist discovers...",
    image: Image1,
  },
  {
    id: 4,
    title: "Crimson Serendipity",
    genre: "Drama",
    description: "Against the backdrop of...",
    image: Image1,
  },
  {
    id: 5,
    title: "Quantum Mirage",
    genre: "Sci-Fi",
    description: "A brilliant physicist...",
    image: Image1,
  },
  {
    id: 6,
    title: "The Celestial Chiper",
    genre: "Sci-Fi",
    description: "In a realm where constellations...",
    image: Image2,
  }
];

const state = {
  articles,
  moviesData,
  moviesImages,
};

export default state;
