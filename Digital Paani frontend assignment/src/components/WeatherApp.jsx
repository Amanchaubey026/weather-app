import {  useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import {WeatherDisplay} from "./WeatherDisplay";
import Navbar from "./Navbar";
import { useWeather } from "../context/WeatherContext";

const WeatherApp = () => {
  const { city, setCity, weatherData, getWeather } = useWeather();

  useEffect(() => {
    getWeather(city);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div className="app">
      <Navbar setCity={setCity} />
      <Flex direction="column" align="center">
        <Flex direction="column" align="center">
          <Heading as="h1" fontSize={'68px'} mb={4}>
            {city}
          </Heading>
          <Flex mb={8} justify="space-between" w="100%">
            <WeatherDisplay data={weatherData} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default WeatherApp;
