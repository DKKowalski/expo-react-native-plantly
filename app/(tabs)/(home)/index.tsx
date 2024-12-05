import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { theme } from "../../../theme";
import PlantCardComponent from "../../../components/PlantCardComponent";
import { usePlantStore } from "../../../store/plantStore";
import { useRouter } from "expo-router";
import ButtonPressable from "../../../components/ButtonPressable";

export default function Page() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);

  return (
    <>
      <StatusBar backgroundColor={theme.colorPrimary} style="light" />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={plants}
          renderItem={({ item }) => (
            <PlantCardComponent key={item.id} plant={item} />
          )}
          ListEmptyComponent={
            <View style={styles.listEmptyContainer}>
              <View>
                <Text style={styles.text}>No plants added</Text>
              </View>
              {/* <View>
                <ButtonPressable
                  title="Add new plant"
                  onPress={() => router.navigate("/new")}
                ></ButtonPressable>
              </View> */}
            </View>
          }
        />
        <View style={styles.contentContainer}>
          <ButtonPressable
            title="Add new plant"
            onPress={() => router.navigate("/new")}
          ></ButtonPressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },

  contentContainer: {
    padding: 24,
  },

  text: {
    // textAlign: "center",
    marginBottom: 18,
    fontSize: 18,
  },

  listEmptyContainer: {
    flex: 1,
  },
});
