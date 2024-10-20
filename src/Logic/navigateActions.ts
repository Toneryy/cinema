import { NavigateFunction } from 'react-router-dom';

// Навигация с параметром трейлера
export const navigateToTrailer = (navigate: NavigateFunction) => {
  navigate('/article1?trailer=true');
};

// Навигация на страницу статьи
export const navigateToArticle = (navigate: NavigateFunction) => {
  navigate('/article1');
};

// Переход по произвольной ссылке
export const navigateToLink = (navigate: NavigateFunction, link: string) => {
  navigate(link);
};

// Логика прокрутки к трейлеру

export const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};
