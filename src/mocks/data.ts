import { User, Weather, WeatherEntry } from './types';

export const entries: WeatherEntry[] = [
    {
        id: 1,
        date: new Date().toISOString(),
        temperature: 23.5,
        weather: 'Sunny',
        submittedBy: 'Vasya',
        comment: 'Nice weather',
    },
    {
        id: 2,
        date: new Date().toISOString(),
        temperature: -5,
        weather: 'Snowy',
        submittedBy: 'Igor',
        comment: 'Very cold',
    },
];

export const users: User[] = [
    { id: 'Vasya', name: 'Vasya' },
    { id: 'Igor', name: 'Igor' },
    { id: 'Lena', name: 'Lena' },
];

export const weather: Weather[] = [
    { label: "Солнечно", value: "Sunny" },
    { label: "Дождливо", value: "Rainy" },
    { label: "Облачно", value: "Cloudy" },
    { label: "Снежно", value: "Snowy" },
];