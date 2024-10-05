import React from "react";

import s from '../styles/App.module.css';
import Intro from "./Intro";
import Movies from "./Movies";
import LatestNews from "./LatestNews";
import FAQ from "./FAQ";
import Hero from "./Hero";

const Main: React.FC = () => {
    return (
        <main className={s.main}>
            <Intro />
            <Movies />
            <LatestNews />
            <FAQ />
            <Hero />
        </main>
    )
}

export default Main;