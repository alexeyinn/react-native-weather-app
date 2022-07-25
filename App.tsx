import Loading from "./src/components/Loading";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./src/components/Weather";
import { IWeatherApiData } from "./src/interfaces";

// 1:40:00
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [temp, setTemp] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");

  const apiKey = "b71aa60c6985f035c25ba94fec60b0f3";

  const getWeather = async (lat: number, long: number) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    }: IWeatherApiData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
    );
    setTemp(temp);
    setWeatherCondition(weather[0].main);
    setIsLoaded(true);
  };

  const getLocation = async () => {
    await Location.requestForegroundPermissionsAsync();
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    getWeather(latitude, longitude);
  };

  useEffect(() => {
    getLocation();
  });

  return isLoaded ? (
    <Weather temp={temp} weather={weatherCondition} />
  ) : (
    <Loading />
  );
}
