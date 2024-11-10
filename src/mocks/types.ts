
export type WeatherEntry = {
    id?: string;
    date: string;
    temperature: number;
    weather: string;
    submittedBy: string;
    comment?: string;
};

export type User = {
    id: string;
    name: string;
};

export type Weather = {
    label: string
    value: string
}