import React from "react";
import s from '../../styles/Articles/articleIntro.module.css';

interface IntroProps {
    Title: string;
}

const ArticleIntro: React.FC<IntroProps> = ({ Title }) => {
    return (
        <section className={s.introSection}>
            <div className={s.content}>
                <h1 className={s.title}>
                    {Title}
                </h1>
                <h3 className={s.subTitle}>
                    Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan to synchronize 
                    the consciousness of humanity with a new solar system. "Solaris Synchrony" is a gripping 
                </h3>
                <div className={s.buttonContainer}>
                    <button className={s.watchTrailer}>Watch Trailer</button>
                    <button className={s.watchList}>Watch List</button>
                </div>
            </div>
        </section>
    );
}

export default ArticleIntro;