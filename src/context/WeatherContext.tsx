import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Weather {
  date: string;
  temperatureC: number;
  summary: string;
}

interface WeatherContextProps {
  weather: Weather[];
  setWeather: React.Dispatch<React.SetStateAction<Weather[]>>;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<Weather[]>([]);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};
