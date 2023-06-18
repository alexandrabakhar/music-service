import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    username: null,
    id: null,
    accessToken: null,
    refreshToken: null,
    currentTrackId: null,
    isPlaying: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogout: () => initialState,
        setLogin: (state, { payload }) => {
            return {
                ...state,
                username: payload?.username,
                id: payload.id,
                isAuthenticated: true,
            };
        },
        setRefreshToken: (state, { payload }) => ({
            ...state,
            refreshToken: payload.refreshToken,
        }),
        setAccessToken: (state, { payload }) => ({
            ...state,
            accessToken: payload.accessToken,
        }),
        setCurrentTrackId: (state, { payload }) => {
            return {
                ...state,
                currentTrackId: payload.currentId,
                isPlaying: false,
            };
        },

    },
});

export const {
    setLogout,
    setLogin,
    setCurrentTrackId,
    setAccessToken,
    setRefreshToken,
} = userSlice.actions;
export default userSlice.reducer;

// это хук
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserID = (state) => state.user.id;
export const selectCurrentTrackId = (state) => state.user.currentTrackId;
