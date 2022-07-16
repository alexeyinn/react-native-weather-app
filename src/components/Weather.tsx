import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface IProps {
  temp: number;
}

const Weather = ({ temp }: IProps) => {
  return (
    <View style={styles.container}>
      <Text>{Math.round(temp)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Weather;
