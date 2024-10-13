import React from "react";
import s from '../../styles/Articles/trailer.module.css';

interface TrailerProps {
  videoSrc: string;  // ссылка на видео трейлера
  Title: string;
}

const Trailer: React.FC<TrailerProps> = ({ videoSrc, Title }) => {
  return (
    <section className={s.trailerSection}>
        <h2 className={s.title}>
            {Title}
        </h2>
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
