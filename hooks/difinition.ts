import { z } from "zod";

export const searchFormScheme = z.object({
  query: z.string().min(1, { message: "Must be 2 characters long." }).max(100).optional(),
});

export interface weatherState {
  city: string;
  weatherData: WeatherDataType | null;
  isLoading: boolean;
  isError: boolean;
  setError: string | null;
  setCity: (city: string) => void;
  fetchWeather: (city: string) => Promise<void>;
  fetchWeatherByCoords:(latitude : number, longitude:number)=> Promise<void>
}

export interface WeatherDataType {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        avgtemp_f: number;
        condition: {
          text: string;
          icon: string;
        };
      };
    }[];
  };
}

export interface WeatherCardProps {
  day: WeatherDataType["forecast"]["forecastday"][0];
}
