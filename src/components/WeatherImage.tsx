import React from "react";
import { View, Text, Image } from "react-native";

interface WeatherImageProps {
  type: "cloudy" | "rain" | "sun" | "thunder";
  size: "large" | "small";
}

export function WeatherImage({ size, type }: WeatherImageProps) {
  return (
    <View>
      <Image source={require("../assets/images/rain.png")} />
    </View>
  );
}
