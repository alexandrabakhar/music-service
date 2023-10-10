import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/usersApi';
import userReducer from './slices/user';
import { catalogApi } from './services/catalogApi';
import filterReducer from './slices/filter';

export const store = configureStore({
    reducer: {
        user: userReducer,
        filter: filterReducer,
        [userApi.reducerPath]: userApi.reducer,
        [catalogApi.reducerPath]: catalogApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            userApi.middleware,
            catalogApi.middleware,
        ]),
});
