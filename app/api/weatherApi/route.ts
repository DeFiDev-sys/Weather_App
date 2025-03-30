import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  try {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const api_url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;

    const response = await axios.get(api_url);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
        return NextResponse.json({ error: error.response.data?.message || error.message }, { status: error.response.status });
    } 
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 });
  }
}
