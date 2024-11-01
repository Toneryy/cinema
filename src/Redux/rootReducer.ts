// rootReducer.ts
import { combineReducers } from 'redux';
import articlesReducer from './slices/articlesSlice';
import moviesReducer from './slices/moviesSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
    articles: articlesReducer,
    movies: moviesReducer,
    auth: authReducer,
});

export default rootReducer;
