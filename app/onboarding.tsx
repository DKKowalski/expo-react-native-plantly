import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { useUserStore } from "../store/userStore";
import { useRouter } from "expo-router";
import ButtonPressable from "../components/ButtonPressable";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../theme";
import { StatusBar } from "expo-status-bar";
import PlantImage from "../components/PlantImage";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);

  const handlePress = () => {
    toggleHadOnboarded();
    router.replace("/");
  };
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[theme.colorPrimary, theme.colorSecondary]}
        style={styles.container}
      >
        <View>
          <Text style={[styles.text, styles.heading]}>Fla-wares</Text>
          <Text style={styles.text}>Nothing new. Just vibes!!</Text>
        </View>

        <PlantImage />

        <ButtonPressable title="Let me in!" onPress={handlePress} />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    color: theme.backgroundColor,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 48,
  },
});
