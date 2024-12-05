import { Link, Redirect, Tabs } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../theme";
import { useUserStore } from "../../store/userStore";
import { Pressable } from "react-native";
// import { Text } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href={"/onboarding"} />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorPrimary }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),

          headerRight: () => (
            <Link href={"/new"} asChild>
              <Pressable hitSlop={30} style={{ marginRight: 18 }}>
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
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          // tabBarLabel: (props) => <Text>Hi</Text>,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
