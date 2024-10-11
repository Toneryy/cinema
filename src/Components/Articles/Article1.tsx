import React from 'react';
import ArticleMovies from './ArticleMovies'

import s from '../../styles/App.module.css';

function Article1() {

  return (
    <div className={s.wrapper}>
      <main className={s.main}>
        <ArticleMovies />
      </main>
    </div>
  );
}

export default Article1;
