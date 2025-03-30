/* eslint-disable @next/next/no-img-element */
import { WeatherCardProps } from "@/hooks/difinition";
import { CardContent, CardDescription, CardHeader } from "./ui/card";

const WeatherCard: React.FC<WeatherCardProps> = ({ day }) => {
  return (
    <div>
      <CardHeader>{new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}</CardHeader>
      <CardContent className='flex justify-center items-center'>
        <img src={day?.day?.condition?.icon} alt='weather icon' className='object-cover' />
      </CardContent>
      <CardDescription className='px-6 flex flex-col justify-center items-center'>
        <p>{day?.day?.avgtemp_c}°C</p>
        <p>{day?.day?.condition?.text}</p>
      </CardDescription>
    </div>
  );
};

export default WeatherCard;
