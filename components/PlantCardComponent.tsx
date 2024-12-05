import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PlantImage from "./PlantImage";
import { PlantType } from "../store/plantStore";
import { theme } from "../theme";

interface PlantCardProps {
  plant: PlantType;
}

export default function PlantCardComponent({ plant }: PlantCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <PlantImage size={80} imageURI={plant.imageURI} />
      </View>

      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {plant.name}
        </Text>
        <Text style={styles.wateringFrequencyDays}>
          Water every {plant.wateringFrequencyDays} days
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 12,
    // borderWidth: 1,
    // borderColor: theme.colorSecondary,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    backgroundColor: theme.backgroundColor,
    alignItems: "center",
    marginBottom: 18,
  },
  imageContainer: {
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    color: theme.colorPrimary,
    fontWeight: "bold",
  },
  wateringFrequencyDays: {
    fontSize: 16,
    color: theme.colorSecondary,
  },
});
