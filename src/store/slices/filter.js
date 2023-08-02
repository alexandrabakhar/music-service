import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    year: [],
    author: [],
    genre: [],
    search: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterYear: (state, { payload }) => ({
            ...state,
            year: [payload.year],
        }),
        setFilterAuthor: (state, { payload }) => ({
            ...state,
            author: [...state.author, payload.author],
        }),

        setFilterGenre: (state, { payload }) => ({
            ...state,
            genre: [...state.genre, payload.genre],
        }),
        deleteAuthor: (state, { payload }) => ({
            ...state,
            author: state.author.filter((el) => el !== payload.author),
        }),
        deleteGenre: (state, { payload }) => ({
            ...state,
            genre: state.genre.filter((el) => el !== payload.genre),
        }),
        deleteYear: (state) => ({
            ...state,
            year: [],
        }),
        setSearch: (state, { payload }) => ({
            ...state,
            search: payload,
          }),
    },
});

export const {
    setFilterAuthor,
    setFilterGenre,
    setFilterYear,
    deleteAuthor,
    deleteGenre,
    deleteYear,
    setSearch
} = filterSlice.actions;

export default filterSlice.reducer;

export const selectAuthor = (state) => state.filter.author;
export const selectGenre = (state) => state.filter.genre;
export const selectYear = (state) => state.filter.year;
export const selectSearch = (state) => state.filter.search;
