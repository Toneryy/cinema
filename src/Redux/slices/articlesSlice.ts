// articlesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import state from '../state'; // Импортируем начальные данные

interface Article {
    title: string;
    text: string;
    image: string;
    link: string;
}

interface ArticlesState {
    articles: Article[];
}

const initialState: ArticlesState = {
    articles: state.articles, // Используем данные из state.ts
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (state, action: PayloadAction<Article[]>) => {
            state.articles = action.payload; // обновляем состояние
        },
        addArticle: (state, action: PayloadAction<Article>) => {
            state.articles.push(action.payload); // добавляем новую статью
        },
        removeArticle: (state, action: PayloadAction<string>) => {
            state.articles = state.articles.filter(article => article.link !== action.payload); // удаляем статью по ссылке
        },
    },
});

export const { setArticles, addArticle, removeArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
