import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import * as Location from "expo-location";

const Loading = () => {
  const getLocation = async () => {
    await Location.requestForegroundPermissionsAsync();
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
  };

  useEffect(() => {
    getLocation();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Получение погоды...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#fdf6aa",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});

export default Loading;
