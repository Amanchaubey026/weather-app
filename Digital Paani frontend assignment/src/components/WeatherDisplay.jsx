/* eslint-disable react/prop-types */
// import React from "react";
import { Box, Heading, Image,  Grid } from "@chakra-ui/react";

const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const WeatherDisplay = ({ data }) => {
  const sunriseTime = formatTime(data.sunrise);
  const sunsetTime = formatTime(data.sunset);

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={6}
      px={{ base: 4, md: 8 }}
      py={8}
    >
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Heading textAlign={"center"} as="h2" size="xl" mb={4}>
          Temperatures
        </Heading>
        <Image src="https://cdn.dribbble.com/users/391028/screenshots/2647080/hammer.gif" />
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Temperature: {data.temp}
        </Heading>
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Min Temperature: {data.min_temp}
        </Heading>
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Max Temperature: {data.max_temp}
        </Heading>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Heading textAlign={"center"} as="h2" size="xl" mb={4}>
          Humidity
        </Heading>
        <Image src="https://media0.giphy.com/media/i4Eu10o21SUOFbIe9S/giphy.gif?cid=ecf05e47c6f2f0813664770972d58f163d1dd6c2ad509b69&rid=giphy.gif" />
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Humidity: {data.humidity}
        </Heading>
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Feels Like: {data.feels_like}
        </Heading>
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Cloud Percentage: {data.cloud_pct}
        </Heading>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Heading textAlign={"center"} as="h2" size="xl" mb={4}>
          Sun Info and Wind Speed
        </Heading>
        <Image src="https://cdn.dribbble.com/users/418188/screenshots/3114192/sunset_sunrise_animation_tubik_studio.gif" />
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Sunrise: {sunriseTime}
        </Heading>
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Sunset: {sunsetTime}
        </Heading>
        <Heading textAlign={"center"} as="h2" fontSize={"20px"} size="md">
          Wind Speed: {data.wind_speed}
        </Heading>
      </Box>
    </Grid>
  );
};

export { WeatherDisplay };
