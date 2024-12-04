import React from "react";
import { Pressable, Text, StyleSheet, Platform } from "react-native";
import { theme } from "../theme";
import * as Haptics from "expo-haptics";

interface Props {
  title: string;
  onPress: () => void;
}

export default function ButtonPressable({ title, onPress }: Props) {
  const handlePress = () => {
    if (Platform.OS !== "web")
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };
  return (
    <Pressable
      style={({ pressed }) => {
        if (pressed) {
          return [styles.button, styles.buttonPressed];
        }
        return styles.button;
      }}
      onPress={handlePress}
    >
      <Text style={styles.text}>{title} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    elevation: 5,
    backgroundColor: theme.colorPrimary,
  },

  buttonPressed: {
    backgroundColor: theme.colorSecondary,
  },
});
