import Image1 from '../data/mainPage/slider/Image1.png';
import Image2 from '../data/mainPage/slider/Image2.png';
import Image3 from '../data/mainPage/slider/Image3.png';


const articles = [
  {
    title: "Solaris Synchrony: a Celestial Odyssey of Hope and Harmony",
    text: "Against the backdrop of a dying Earth...",
    image: Image1,
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
    image: Image3,
    link: "/article3",
  },
];

const moviesData = [
  {
    id: 1,
    title: "The Celestial Chiper",
    genre: "Sci-Fi",
    description: "In a realm where constellations...",
    image: Image1,
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
    title: "Solaris Synchrony",
    genre: "Sci-Fi",
    description: "Against the backdrop of...",
    image: Image1,
  },
];

const state = {
    articles,
    moviesData,
};

export default state;