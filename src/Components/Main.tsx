import React from "react";

import s from '../styles/App.module.css';
import Intro from "./Intro";

const Main: React.FC = () => {
    return (
        <main className={s.main}>
            <Intro />
        </main>
    )
}

export default Main;