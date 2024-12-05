import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import PlantImage from "../components/PlantImage";
import { theme } from "../theme";

import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import ButtonPressable from "../components/ButtonPressable";
import CustomTextInput from "../components/CustomTextInput";

export default function New() {
  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<string>("");

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} needs to be watered?`
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Water frequency must be a number."
      );
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.center}>
        <PlantImage />
      </View>

      <View style={styles.center}>
        <CustomTextInput
          label="Name"
          placeholder="E.g. Casper the cactus"
          value={name}
          autoCapitalize="words"
          onChangeText={setName}
        />
        <CustomTextInput
          autoCapitalize="none"
          label="Watering frequency (every x days)"
          placeholder="E.g. 6"
          value={days}
          onChangeText={setDays}
          keyboardType="number-pad"
        />
      </View>

      <ButtonPressable title="Add plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },

  center: {
    alignItems: "center",
  },

  contentContainer: {},

  input: {
    borderColor: theme.colorSecondary,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 18,
  },
});
