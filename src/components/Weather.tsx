import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
interface IProps {
  temp: number;
  weather: string;
}

const weatherConditions: any = {
  Rain: {
    iconName: "rainy",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
    title: "Дождь",
    subtitle: "Возьмите зонтик",
  },
  Snow: {
    iconName: "snow",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "На улице снежок",
    subtitle: "Лепите снеговиков",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757f9a", "#d7dde8"],
    title: "Облачно",
    subtitle: "Принципе норм",
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
        <MaterialCommunityIcons
          name={weatherConditions[weather].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{Math.round(temp)}°</Text>
      </View>
      <View style={{ ...styles.container, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 25,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});

export default Weather;
