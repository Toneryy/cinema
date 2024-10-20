import React from "react";

import Hero from "../../Hero";

import s from '../../../styles/Pages/FAQ/FAQ.module.css'
import styles from '../../../styles/App.module.css'

import playIcon from "../../../data/Pages/FAQ/playIcon.png"
import bookIcon from "../../../data/Pages/FAQ/bookIcon.png"
import webIcon from "../../../data/Pages/FAQ/webIcon.png"

const FaqPage: React.FC = () => {
    return (
        <main className={styles.main}>
            <section className={s.FAQSection}>
                <h1 className={s.title}>FREQUENTLY ASKED QUESTION</h1>
                <h4 className={s.subtitle}>
                    Check out our Frequently Asked Questions section for everything you need to know about 
                    your movie streaming experience.
                </h4>
                {/* Здесь должен быть поиск */}
                <div className={s.gridContainer}>
                    <div className={s.gridItem}>
                        <img src={playIcon} alt="play icon" width="56px" height="56px"/>
                        <h3 className={s.gridTitle}>Watch Video Tutorial</h3>
                        <p className={s.gridDescription}>
                            Short video that show you how it’s done 
                        </p>
                    </div>

                    <div className={s.gridItem}>
                        <img src={bookIcon} alt="book icon" width="56px" height="56px"/>
                        <h3 className={s.gridTitle}>Learn What’s New</h3>
                        <p className={s.gridDescription}>
                            Explore our lates feature releases and improvements
                        </p>
                    </div>

                    <div className={s.gridItem}>
                        <img src={webIcon} alt="web icon" width="56px" height="56px"/>
                        <h3 className={s.gridTitle}>Join Our Community</h3>
                        <p className={s.gridDescription}>
                            Learn with fellow Mostream enthusiasts
                        </p>
                    </div>

                    <div className={s.gridItem}>
                        <img src={playIcon} alt="play icon" width="56px" height="56px"/>
                        <h3 className={s.gridTitle}>Watch Video Tutorial</h3>
                        <p className={s.gridDescription}>
                            Short video that show you how it’s done 
                        </p>
                    </div>

                    <div className={s.gridItem}>
                        <img src={bookIcon} alt="book icon" width="56px" height="56px"/>
                        <h3 className={s.gridTitle}>Learn What’s New</h3>
                        <p className={s.gridDescription}>
                            Explore our lates feature releases and improvements
                        </p>
                    </div>

                    <div className={s.gridItem}>
                        <img src={webIcon} alt="web icon" width="56px" height="56px"/>
                        <h3 className={s.gridTitle}>Join Our Community</h3>
                        <p className={s.gridDescription}>
                            Learn with fellow Mostream enthusiasts
                        </p>
                    </div>
                </div>
            </section>
            <Hero />
        </main>
    );
}

export default FaqPage;