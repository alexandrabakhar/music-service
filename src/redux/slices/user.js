import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    userID: null,
    access: null,
    currentTrackId: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogout: () => initialState,
        setLogin: (state, { payload }) => {
            return {
                ...state,
                userID: payload.userID,
                isAuthenticated: true,
            };
        },
        setAccess: (state, { payload }) => ({
            ...state,
            access: payload.access,
        }),
        setCurrentTrackId: (state, { payload }) => {
            return {
                ...state,
                currentTrackId: payload.currentTrackId,
            };
        },
    },
});

export const { setLogout, setLogin, setCurrentTrackId, setAccess, setRefresh } =
    userSlice.actions;
export default userSlice.reducer;

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserID = (state) => state.user.userID;
export const selectCurrentTrackId = (state) => state.user.currentTrackId;
