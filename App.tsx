import Loading from "./src/components/Loading";
import * as Location from "expo-location";
import { useEffect } from "react";

// 1:14:30
export default function App() {
  const getLocation = async () => {
    await Location.requestForegroundPermissionsAsync();
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    console.log(latitude, longitude);
  };

  useEffect(() => {
    getLocation();
  });

  return <Loading />;
}
