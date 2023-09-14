import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    username: null,
    id: null,
    access: null,
    refresh: null,
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
        setRefresh: (state, { payload }) => ({
            ...state,
            refresh: payload.refresh,
        }),
        setAccess: (state, { payload }) => ({
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
        setIsPlaying: (state, { payload }) => {
            return {
                ...state,
                isPlaying: payload,
            };
        },
    },
});

export const {
    setLogout,
    setLogin,
    setCurrentTrackId,
    setAccess,
    setRefresh,
    setIsPlaying
} = userSlice.actions;
export default userSlice.reducer;

// это хук
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserID = (state) => state.user.id;
export const selectCurrentTrackId = (state) => state.user.currentTrackId;
