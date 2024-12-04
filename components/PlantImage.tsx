import React from "react";
import { Image, useWindowDimensions } from "react-native";

export default function PlantImage() {
  const { width } = useWindowDimensions();

  const imageSize = width / 1.5;
  return (
    <Image
      source={require("./../assets/plant.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
}
