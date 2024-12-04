import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 8,
          paddingVertical: 8,
          borderBottomColor: theme.colorPrimary,
          borderBottomWidth: 2,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 200 }}>Coffee </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    // alignItems: "center",
    justifyContent: "center",
  },
});
