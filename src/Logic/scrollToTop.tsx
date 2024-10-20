// ScrollToTop.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу вверх
  }, [pathname]); // Запускаем эффект при изменении пути

  return null; // Компонент ничего не рендерит
};

export default ScrollToTop;
