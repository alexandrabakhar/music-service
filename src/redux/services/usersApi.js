import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://skypro-music-api.skyeng.tech/',
        prepareHeaders: (headers) => {
            headers.set('content-type', 'application/json');

            return headers;
        },
    }),
    endpoints: (build) => ({
        signUp: build.mutation({
            query: (body) => ({
                url: 'user/signup/',
                method: 'POST',
                body,
            }),
            // регистрация
        }),
        login: build.mutation({
            query: (body) => ({
                url: `user/login/`,
                method: 'POST',
                body,
            }),
            // авторизация
        }),
        getToken: build.mutation({
            query: (body) => ({
                url: `user/token/`,
                method: 'POST',
                body,
            }),
            // получение токена
        }),
        getAccessByRefresh: build.mutation({
            query: (body) => ({
                url: `user/token/refresh/`,
                method: 'POST',
                body,
            }),

            // обновление токена
        }),
    }),
});

export const {
    useSignUpMutation,
    useLoginMutation,
    useGetTokenMutation,
    useGetAccessByRefreshMutation,
} = userApi;
