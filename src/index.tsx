// index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './Redux/state';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App articles={state.articles} moviesData={state.moviesData} />
    </React.StrictMode>
  );
}
