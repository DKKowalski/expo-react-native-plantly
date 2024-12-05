import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useUserStore } from "../../store/userStore";
import ButtonPressable from "../../components/ButtonPressable";

export default function Profile() {
  const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  const router = useRouter();

  const handlePress = () => {
    toggleHadOnboarded();
    router.replace("/onboarding");
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>profile</Text> */}
      <ButtonPressable title="Let me out!" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
