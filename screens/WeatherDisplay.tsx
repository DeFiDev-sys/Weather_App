/* eslint-disable @next/next/no-img-element */
"use client";

import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import { useWeatherState } from "@/context/weatherStore";
import { WeatherDataType } from "@/hooks/difinition";
import { Key } from "react";
import { BarLoader } from "react-spinners";
import { CloudOffIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";

const WeatherDisplay = () => {
  const { weatherData, isLoading, setError, isError } = useWeatherState();
  const { theme } = useTheme();
  return (
    <div className='min-h-dvh'>
      <SearchBar />

      {isLoading ? (
        <span className='flex justify-center  items-center my-52'>
          <BarLoader width={200} color={theme === "dark" ? "#ffffff" : "#000000"} />
        </span>
      ) : isError ? (
        <p className='text-center flex justify-center  items-center my-52'>{setError}</p>
      ) : !weatherData ? (
        <div className='flex flex-col gap-2 justify-center items-center my-10'>
          <CloudOffIcon size={100} /> <span>No Data found. Try again later.</span>
        </div>
      ) : (
        <div className='my-5 space-y-5 min-h-dvh'>
          <h1 className='text-center items-center text-2xl'>
            {weatherData?.location.name}, {weatherData?.location.country}🌎🌏
          </h1>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-20 mx-4'>
            {weatherData?.forecast?.forecastday?.map(
              (day: WeatherDataType["forecast"]["forecastday"][0], index: Key) => (
                <Card key={index}>
                  <WeatherCard day={day} />
                </Card>
              )
            )}
          </div>
          <div className='mt-2 mx-4 lg:px-12'>
            <Card>
              <CardHeader>{weatherData.location.name} Current Infomation.</CardHeader>
              <CardTitle className='px-6'>Humdity, Temp, Condition, and Wind Speed.</CardTitle>
              <div className='flex flex-row gap-5 items-center px-6'>
                <CardDescription>Condition:</CardDescription>
                <CardContent>
                  <img src={weatherData.current.condition.icon} alt='current icon' className='object-cover' />
                  <CardDescription>{weatherData.current.condition.text}</CardDescription>
                </CardContent>
              </div>
              <div className='flex flex-row gap-5 items-center px-6'>
                <CardDescription>Humidity:</CardDescription>
                <CardContent>
                  <CardDescription>{weatherData.current.humidity}%</CardDescription>
                </CardContent>
              </div>
              <div className='flex flex-row gap-5 items-center px-6'>
                <CardDescription>Temperature:</CardDescription>
                <CardContent className='flex gap-4'>
                  <CardDescription>{weatherData.current.temp_c}°C</CardDescription> ={" "}
                  <CardDescription>{weatherData.current.temp_f}°F</CardDescription>
                </CardContent>
              </div>
              <div className='flex flex-row gap-5 items-center px-6'>
                <CardDescription>Wind Speed:</CardDescription>
                <CardContent>
                  <CardDescription>{weatherData.current.wind_kph}kph</CardDescription>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
