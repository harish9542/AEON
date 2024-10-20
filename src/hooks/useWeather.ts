import { useEffect } from 'react';
import { fetchWeather } from '../services/apiService';
import { useWeather } from '../context/WeatherContext';

export const useWeatherData = () => {
  const { setWeather } = useWeather();

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather();
      setWeather(data);
    };

    getWeather();
  }, [setWeather]);
};
