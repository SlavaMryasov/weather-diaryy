import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, Weather, WeatherEntry } from '../mocks/types';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getWeatherEntries: builder.query<WeatherEntry[], void>({
            query: () => '/entries',
        }),
        addWeatherEntry: builder.mutation<void, WeatherEntry>({
            query: (entry) => ({
                url: '/entries',
                method: 'POST',
                body: entry,
            }),
        }),
        getUsers: builder.query<User[], void>({
            query: () => '/users',
        }),
        getWeatherTypes: builder.query<Weather[], void>({
            query: () => '/weatherOptions',
        }),
    }),
});

export const {
    useGetWeatherEntriesQuery,
    useAddWeatherEntryMutation,
    useGetUsersQuery,
    useGetWeatherTypesQuery
} = weatherApi;
