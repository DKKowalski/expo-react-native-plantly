import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import PlantImage from "../components/PlantImage";
import { theme } from "../theme";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";

import ButtonPressable from "../components/ButtonPressable";
import CustomTextInput from "../components/CustomTextInput";
import { usePlantStore } from "../store/plantStore";
import { useRouter } from "expo-router";

export default function New() {
  const addPlant = usePlantStore((state) => state.addPlants);
  const router = useRouter();
  const [imageURI, setImageURI] = useState<string>();
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

    addPlant(name, Number(days), imageURI);
    router.navigate("/");
  };

  const handleChooseImage = async () => {
    if (Platform.OS === "web") return;

    const results = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (results.assets && results.assets.length > 0) {
      setImageURI(results.assets[0].uri);
    } else {
      Alert.alert("Image selection was canceled or failed.");
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={[styles.center, styles.shadowStyles]}
        activeOpacity={0.8}
        onPress={handleChooseImage}
      >
        <PlantImage imageURI={imageURI} />
      </TouchableOpacity>

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
    flex: 1,
    backgroundColor: "#fff",
  },

  center: {
    alignItems: "center",
    marginBottom: 24,
  },

  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },

  input: {
    borderColor: theme.colorSecondary,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 18,
  },

  shadowStyles: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});
