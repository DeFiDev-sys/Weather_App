import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  try {
    let apiUrl = "";
    
    if (city) {
      apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
    } else if (lat && lon) {
      apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7&aqi=no&alerts=no`;
    } else {
      return NextResponse.json({ error: "Missing location parameters" }, { status: 400 });
    }

    const response = await axios.get(apiUrl);
    return NextResponse.json(response.data);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
        return NextResponse.json({ error: error.response.data?.message || error.message }, { status: error.response.status });
    } 
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 });
  }
}
