import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://painassasin.online/' }),
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
        tokenRefresh: build.mutation({
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
    useTokenRefreshMutation,
} = userApi;
