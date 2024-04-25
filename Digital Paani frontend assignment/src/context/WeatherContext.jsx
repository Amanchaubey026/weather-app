/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Delhi");

  const getWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "934a89914bmshb06642e532b5378p1d51e3jsn046abfdddf89",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, city, setCity, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
