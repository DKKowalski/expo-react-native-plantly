import React from "react";
import { Image, useWindowDimensions } from "react-native";

interface Props {
  size?: number;
  imageURI?: string;
}

export default function PlantImage({ size, imageURI }: Props) {
  const { width } = useWindowDimensions();

  const imageSize = size ?? width / 1.5;
  return (
    <Image
      source={imageURI ? { uri: imageURI } : require("./../assets/plant.png")}
      style={{
        width: imageSize,
        height: imageSize,
        borderRadius: 6,
      }}
    />
  );
}
