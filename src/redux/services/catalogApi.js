import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://skypro-music-api.skyeng.tech/',
        tagTypes: ['Tracks', 'Collection'],
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.access;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({ //получение всех треков
            query: () => 'catalog/track/all/',
            providesTags: ['Tracks'],
        }),
        getCollectionById: builder.query({ //получение подборок по id подборки
            query: (id) => `catalog/selection/${id}/`,
            providesTags: ['Collection'],
        }),
        setLike: builder.mutation({ //поставить лайк треку
            query: (id) => ({ 
                url: `catalog/track/${id}/favorite/`,
                method: 'POST',
            }),
            invalidatesTags: ['Tracks', 'Collection'],
        }),
        setUnlike: builder.mutation({ //убрать лайк у трека
            query: (id) => ({
                url: `catalog/track/${id}/favorite/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tracks', 'Collection'],
        }),
    }),
});

export const {
    useGetAllTracksQuery,
    useGetCollectionByIdQuery,
    useSetLikeMutation,
    useSetUnlikeMutation,
} = catalogApi;
