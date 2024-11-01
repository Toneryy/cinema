// store.ts
import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articlesSlice';
import moviesReducer from './slices/moviesSlice';
import authReducer from './slices/authSlice';
import watchListReducer from './slices/watchListSlice';
import { Article } from "./types";
import { Movie } from "./types";

// Определите интерфейсы для вашего состояния
export interface ArticlesState {
    articles: Article[];
}

export interface MoviesState {
    movies: Movie[];
    moviesImages: string[]; // Добавляем moviesImages в интерфейс
}

export interface AuthState {
    isAuthenticated: boolean;
}

export interface WatchListState {
    watchList: number[];
}

export type RootState = {
    articles: ArticlesState;
    movies: MoviesState; // Убедитесь, что movies включает moviesImages
    auth: AuthState;
    watchList: WatchListState;
};

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        movies: moviesReducer,
        auth: authReducer,
        watchList: watchListReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export default store;
