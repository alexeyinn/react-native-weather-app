import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  temp: number;
  weather: string;
}

const Weather = ({ temp, weather }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Ionicons name="rainy" size={96}></Ionicons>
        <Text style={styles.temp}>{Math.round(temp)}°</Text>
      </View>
      <View style={styles.container}></View>
    </View>
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
  },
});

export default Weather;
