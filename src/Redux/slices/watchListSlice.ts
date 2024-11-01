// watchListSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WatchListState {
    watchList: number[]; // Хранит id фильмов в списке
}

const initialState: WatchListState = {
    watchList: [],
};

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addToWatchList(state, action: PayloadAction<number>) {
            state.watchList.push(action.payload);
        },
        removeFromWatchList(state, action: PayloadAction<number>) {
            state.watchList = state.watchList.filter(id => id !== action.payload);
        },
    },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
