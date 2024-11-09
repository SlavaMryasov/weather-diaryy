import { http, HttpResponse } from 'msw';
import { entries, users as usersFromData, weather as weatherFromData } from './data';
import { WeatherEntry, User, Weather } from './types';

export const handlers = [
    http.get('/api/entries', () => {
        const weatherEntries: WeatherEntry[] = entries;
        return HttpResponse.json(weatherEntries);
    }),

    http.post<never, WeatherEntry>('/api/entries', async ({ request }) => {
        const newEntry = await request.json();
        entries.push(newEntry)
        return HttpResponse.json(newEntry, { status: 201 });
    }),

    http.get('/api/users', () => {
        const users: User[] = usersFromData;
        return HttpResponse.json(users);
    }),
    http.get('/api/weatherOptions', () => {
        const weather: Weather[] = weatherFromData;
        return HttpResponse.json(weather);
    }),
];
