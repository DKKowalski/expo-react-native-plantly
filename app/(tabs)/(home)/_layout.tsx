import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { theme } from "../../../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="plant/[plantId]"
        options={{
          title: "",
        }}
      />

      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href={"/new"} asChild>
              <Pressable hitSlop={30} style={{ marginRight: 10 }}>
                <Ionicons
                  name="add-circle-outline"
                  size={34}
                  color={theme.colorPrimary}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
