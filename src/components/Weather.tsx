import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
interface IProps {
  temp: number;
  weather: string;
}

const weatherConditions: any = {
  Rain: {
    iconName: "rainy",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
  },
  Snow: {
    iconName: "snow",
    gradient: ["#83a4d4", "#b6fbff"],
  },
};

const Weather = ({ temp, weather }: IProps) => {
  return (
    <LinearGradient
      colors={weatherConditions[weather].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Ionicons
          name={weatherConditions[weather].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{Math.round(temp)}°</Text>
      </View>
      <View style={styles.container}></View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
});

export default Weather;
