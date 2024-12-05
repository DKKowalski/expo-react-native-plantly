import React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { theme } from "../theme";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize: "none" | "sentences" | "words" | "characters";
  onChangeText: (text: string) => void;
}

export default function CustomTextInput({
  label,
  placeholder,
  value,
  autoCapitalize = "none",
  keyboardType = "default",
  onChangeText,
}: Props) {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        gap: 6,
        marginBottom: 32,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "semibold",
          color: theme.colorSecondary,
        }}
      >
        {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colorSecondary,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 18,
  },
});
