import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, Button, View } from "react-native";
import { useState } from "react";

type CrewProps = NativeStackScreenProps<RootStackParamList, "Crew">;

const mockCrew = [];

export const Crew = ({ navigation }: CrewProps) => {
  const [crewMember, setCrewMembers] = useState(mockCrew);
  return (
    <View>
      <Text>My workout crew</Text>
      <Button title="Add crew member" onPress={() => console.log("crew")} />
    </View>
  );
};
