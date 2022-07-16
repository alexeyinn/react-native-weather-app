import Loading from "./src/components/Loading";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./src/components/Weather";

// 1:24:30
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [temp, setTemp] = useState(0);

  const apiKey = "b71aa60c6985f035c25ba94fec60b0f3";

  const getWeather = async (lat: number, long: number) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
    );
    setTemp(data.main.temp);
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

  return isLoaded ? <Weather temp={temp} /> : <Loading />;
}
