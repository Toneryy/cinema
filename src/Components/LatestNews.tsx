import React from "react";
import s from '../styles/latestNews.module.css';

import Image1 from '../data/mainPage/moviesImg/Image1.png';
import Image2 from '../data/mainPage/moviesImg/Image2.png';
import Image3 from '../data/mainPage/moviesImg/Image3.png';
import Image4 from '../data/mainPage/moviesImg/Image4.png';

const LatestNews: React.FC = () => {
    return (
        <section className={s.newsSection}>
            <h2 className={s.title}>
                Discover the Our Latest News
            </h2>
            <div className={s.newsContainer}>
                {/* Большая новость */}
                <div className={s.mainNews}>
                    <img src={Image1} alt="Main News" className={s.mainImage} width="592px" height="417px"/>
                    <div className={s.mainText}>
                        <h2>“Solaris Synchrony:” Fires Up on Tracking with $50M Opening</h2>
                        <p>Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan to synchronize the consciousness of humanity with a new solar system...</p>
                        <button className={s.readMoreButton}>Read More</button>
                    </div>
                </div>

                {/* Другие новости */}
                <div className={s.otherNews}>
                    <div className={s.newsItem}>
                        <img src={Image2} alt="News 1" width="376px" height="358px"/>
                        <p>In a world where memories are fleeting and time is a delicate illusion...</p>
                    </div>
                    <div className={s.newsItem}>
                        <img src={Image3} alt="News 2" width="376px" height="358px"/>
                        <p>A brilliant physicist stumbles upon a groundbreaking discovery...</p>
                    </div>
                    <div className={s.newsItem}>
                        <img src={Image4} alt="News 3" width="376px" height="358px"/>
                        <p>Against the backdrop of a dying Earth, a group of scientists races...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
