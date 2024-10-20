// Trailer.tsx

import React from "react";
import s from '../../styles/Articles/trailer.module.css';

interface TrailerProps {
  videoSrc: string;  // ссылка на видео трейлера
  Title: string;
  isVisible: boolean; // Проп для видимости трейлера
}

const Trailer: React.FC<TrailerProps> = ({ videoSrc, Title, isVisible }) => {
  if (!isVisible) return null; // Если трейлер не виден, ничего не отображаем

  return (
    <section className={s.trailerSection}>
      <h2 className={s.title}>{Title}</h2>
      <iframe
        className={s.trailerVideo}
        src={videoSrc}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
};

export default Trailer;
