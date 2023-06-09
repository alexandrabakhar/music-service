import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://painassasin.online/',
        tagTypes: ['Tracks'],
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.token.access;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => 'catalog/track/all/',
            providesTags: ['Tracks'],
        }),
        getPlaylistByUserID: builder.query({
            query: (id) => `catalog/selection/${id}/`,
        }),
        setLike: builder.mutation({
            query: (id) => ({
                url: `catalog/track/${id}/favorite/`,
                method: 'POST',
            }),
            invalidatesTags: ['Tracks'],
        }),
        setUnlike: builder.mutation({
            query: (id) => ({
                url: `catalog/track/${id}/favorite/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tracks'],
        }),
        getTrackByTrackID: builder.query({
            query: (id) => `catalog/track/${id}`,
        }),
    }),
});

export const {
    useGetAllTracksQuery,
    useGetPlaylistByUserIDQuery,
    useSetLikeMutation,
    useSetUnlikeMutation,
    useGetTrackByTrackIDQuery,
} = catalogApi;
