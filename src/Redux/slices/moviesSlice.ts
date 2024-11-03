// moviesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import state from '../state'; // Импортируем начальные данные

interface Movie {
  id: number;
  title: string;
  genre: string;
  description: string;
  image: string;
}

interface MoviesState {
  movies: Movie[];
  moviesImages: string[];
}

const initialState: MoviesState = {
  movies: state.moviesData, // Lанные из state.ts
  moviesImages: state.moviesImages, // Теперь это будет работать
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
