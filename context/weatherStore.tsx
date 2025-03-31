import { create } from "zustand";
import { weatherState } from "@/hooks/difinition";
import axios from "axios";

const getSavedData = () => {
  if (typeof window !== undefined) {
    const savedData = localStorage.getItem("weatherData");
    return savedData ? JSON.parse(savedData) : null;
  }
  return null;
};

export const useWeatherState = create<weatherState>((set) => ({
  city: "",
  weatherData: getSavedData(),
  setError: null,
  isLoading: false,
  isError: false,

  setCity: (city) => set({ city }),
  
  fetchWeather: async (city) => {
    set({ isLoading: true });

    try {
      const res = await axios.get(`/api/weatherApi?city=${city}`);

      set({ weatherData: res.data, isLoading: false, isError: false, setError: null });
      if (typeof window !== undefined) {
        localStorage.setItem("weatherData", JSON.stringify(res.data));
      }
    } catch (error) {
      const errorMessage: string | null = "Failed to fetch weather data.";
      console.log("Error fetching weather data:", error);
      set({ isLoading: false, isError: true, setError: errorMessage });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchWeatherByCoords: async (latitude, longitude) => {
    set({ isLoading: true });

    try {
      const res = await axios.get(`/api/weatherApi?lat=${latitude}&lon=${longitude}`);

      set({ weatherData: res.data, isLoading: false, isError: false, setError: null });

      if (typeof window !== undefined) {
        localStorage.setItem("weatherData", JSON.stringify(res.data));
      }
    } catch (error) {
      const errorMessage: string | null = "Failed to fetch weather data by location.";
      console.log("Error fetching weather data by Location:", error);
      set({ isLoading: false, isError: true, setError: errorMessage });
    } finally {
      set({ isLoading: false });
    }
  },
}));
