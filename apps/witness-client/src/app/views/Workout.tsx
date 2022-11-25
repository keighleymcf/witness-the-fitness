import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, Button, View } from "react-native";
import { useState } from "react";

type WorkoutProps = NativeStackScreenProps<RootStackParamList, "Workout">;

export const Workout = ({ navigation }: WorkoutProps) => {
  const [isWorkoutComplete, setIsWorkoutComplete] = useState(false);

  return (
    <View>
      <Text>Workout</Text>
      {isWorkoutComplete ? (
        <Text>Workout completed today</Text>
      ) : (
        <Button
          title="Add workout"
          onPress={() => setIsWorkoutComplete(true)}
        />
      )}
    </View>
  );
};
