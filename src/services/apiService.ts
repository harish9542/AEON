import axios from 'axios';
import weatherData from '../assets/weatherData.json';

export const fetchWeather = async () => {
  try {
    const response = await axios.get('https://your-web-api/weather');
    return response.data;
  } catch (error) {
    return weatherData;
    console.error('Error fetching weather data:', error);
    throw error;
  }
// try {
//     // Simulate a network delay
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return weatherData;
//   } catch (error) {
//     console.error('Error fetching static weather data:', error);
//     throw error;
//   }
};
