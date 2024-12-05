import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as FileSystem from "expo-file-system";

export interface PlantType {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredTimeStamp: number;
  imageURI?: string;
}

interface PlantState {
  nextId: number;
  plants: PlantType[];
  addPlants: (
    name: string,
    wateringFrequencyDays: number,
    imageURI?: string
  ) => Promise<void>;
  removePlants: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
}

export const usePlantStore = create(
  persist<PlantState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlants: async (
        name: string,
        wateringFrequencyDays: number,
        imageURI?: string
      ) => {
        // console.log(imageURI);
        const savedImageURI =
          FileSystem.documentDirectory +
          `${new Date().getTime()}-${imageURI?.split("/").slice(-1)[0]}`;

        if (imageURI) {
          await FileSystem.copyAsync({
            from: imageURI,
            to: savedImageURI,
          });
        }
        return set((state) => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              ...state.plants,
              {
                id: String(state.nextId),
                name,
                wateringFrequencyDays,
                lastWateredTimeStamp: Date.now(),
                imageURI: imageURI ? savedImageURI : undefined,
              },
            ],
          };
        });
      },
      removePlants: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== plantId),
          };
        });
      },
      waterPlant: (plantId: string) => {
        return set((state) => {
          return {
            ...state,
            plants: state.plants.map((plant) => {
              if (plant.id === plantId) {
                return { ...plant, lastWateredTimeStamp: Date.now() };
              }

              return plant;
            }),
          };
        });
      },
    }),
    {
      name: "user-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
