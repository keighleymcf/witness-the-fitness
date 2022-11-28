import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../types/navigation";
import { Text, Button, View, FlatList } from "react-native";
import { useCallback, useState } from "react";
import { CrewMember, CrewMembers } from "../types/crew";
import { SafeAreaView } from "react-native-safe-area-context";

type CrewBoardProps = BottomTabScreenProps<TabParamList, "CrewBoard">;

const mockCrew: CrewMembers = [
  {
    name: "Friendy McFriendface",
    isWorkoutCompleted: Math.random() < 0.5,
  },
  {
    name: "Arnold Schwarzenegger",
    isWorkoutCompleted: Math.random() < 0.5,
  },
  {
    name: "Jane Fonda",
    isWorkoutCompleted: Math.random() < 0.5,
  },
  {
    name: "Britney Spears",
    isWorkoutCompleted: Math.random() < 0.5,
  },
  {
    name: "Teddy Roosevelt",
    isWorkoutCompleted: Math.random() < 0.5,
  },
  {
    name: "Beyonce Knowles",
    isWorkoutCompleted: Math.random() < 0.5,
  },
  {
    name: "Ruth Bader Ginsberg",
    isWorkoutCompleted: Math.random() < 0.5,
  },
  {
    name: "The Rock",
    isWorkoutCompleted: Math.random() < 0.5,
  },
  {
    name: "Inky the Octopus",
    isWorkoutCompleted: Math.random() < 0.5,
  },
];

export const CrewBoard = ({ navigation }: CrewBoardProps) => {
  const [crewMembers, setCrewMembers] = useState(mockCrew);

  const addCrewMember = useCallback(() => {
    const updatedCrewMembers = [...crewMembers];
    const newCrewMember: CrewMember = {
      name: "New member",
      isWorkoutCompleted: Math.random() < 0.5,
    };
    updatedCrewMembers.push(newCrewMember);
    setCrewMembers(updatedCrewMembers);
  }, [crewMembers]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>My workout crew</Text>
      <FlatList
        data={crewMembers}
        renderItem={({ item, index }) => {
          return (
            <View key={`${item.name}-${index}`}>
              <Text>{item.name}</Text>
              <Text>
                {"Workout completed: "}
                {item.isWorkoutCompleted ? "HECK YEZ" : "not yet bruh"}
              </Text>
            </View>
          );
        }}
      />
      <Button title="Add crew member" onPress={addCrewMember} />
    </SafeAreaView>
  );
};
