import React from "react";

import s from '../styles/subscribe.module.css'

const Subscribe: React.FC = () => {
    return (
        <section className={s.subscribe}>
            <h2 className={s.title}>
                Unlock Your Cinematic Experience! 
                Ready to Dive Into Movie Magic
            </h2>
            <h3 className={s.subTitle}>
            Embark on a journey beyond the ordinary and unlock the door to a world where every
             frame tells a story and every scene is a masterpiece.
            </h3>
        </section>
    );
}

export default Subscribe;