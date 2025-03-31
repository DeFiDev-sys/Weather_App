import React from 'react'
import { useEffect } from 'react'
import { useWeatherState } from '@/context/weatherStore'

export  const useGeoLocation = () => {
  const [locationError, setLocationError] = React.useState<string | null>(null)
  const {fetchWeatherByCoords} = useWeatherState()

  useEffect(()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude, longitude} = position.coords
            fetchWeatherByCoords(latitude, longitude)
        },(error)=>{
            setLocationError("Geolocation permission denied. Please enter a city manually.")
            console.log("Geolocation error:",error)
        })
    }else{
        setLocationError("Geolocation is not supported by this browser.")
    }
  },[fetchWeatherByCoords])

  return {locationError}
}
