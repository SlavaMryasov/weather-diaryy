import { formatDate } from '../utils/formatDate';
import { User, Weather, WeatherEntry } from './types';
import { v4 as uuid } from 'uuid';

const userIdVasya = uuid();
const userIdIgor = uuid();
const userIdLena = uuid();


export const entries: WeatherEntry[] = [
    {
        id: uuid(),
        date: formatDate(),
        temperature: 23.5,
        weather: 'Солнечно',
        submittedBy: 'Вася',
        comment: 'Хорошая погода',
    },
    {
        id: uuid(),
        date: formatDate(),
        temperature: -5,
        weather: 'Снежно',
        submittedBy: 'Игорь',
        comment: 'Очень холодно',
    },
];

export const users: User[] = [
    { id: userIdVasya, name: 'Вася' },
    { id: userIdIgor, name: 'Игорь' },
    { id: userIdLena, name: 'Лена' },
];

export const weather: Weather[] = [
    { label: "Солнечно", value: "Солнечно" },
    { label: "Дождливо", value: "Дождливо" },
    { label: "Облачно", value: "Облачно" },
    { label: "Снежно", value: "Снежно" },
];