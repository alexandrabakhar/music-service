import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    username: null,
    token: null,
    id: null,
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
                token: payload.token,
                isAuthenticated: true,
            };
        },
        setRefreshToken: (state, { payload }) => ({
            ...state,
            refresh: payload.refresh,
        }),
        setAccessToken: (state, { payload }) => ({
            ...state,
            access: payload.access,
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
