import React from "react";

import s from '../../styles/Articles/description.module.css';

const Description: React.FC = () => {
    return  (
        <section className={s.descriptionSection}>
            <article className={s.article}>
                <h2 className={s.title}>
                    Synopsys of the Movie
                </h2>
                <div className={s.textBlock}>
                    <p>
                        "In the not-so-distant future, as Earth teeters on the brink of collapse, 
                        'Solaris Synchrony' unveils a riveting narrative that transcends the 
                        boundaries of time and space. Amidst the shadows of a fading world, a 
                        consortium of brilliant scientists embarks on a race against impending doom”
                    </p>

                    <p>
                        Their audacious mission: to forge a symbiotic connection between the 
                        collective consciousness of humanity and a burgeoning solar system on the 
                        precipice of creation. As the last glimmers of hope flicker against the 
                        backdrop of a dying Earth, the 'Solaris Synchrony' becomes an epic saga of 
                        sacrifice, courage, and the indomitable spirit of exploration.
                    </p>

                    <p>Journey with us through the cosmic tapestry, where the interplay of science and the human spirit takes center stage. Encounter the characters who dare to defy the boundaries of existence, confronting the existential questions that echo through the vastness of the universe.</p>
                </div>
            </article>
        </section>
    );
}

export default Description;