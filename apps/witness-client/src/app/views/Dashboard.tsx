import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, Button, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Workout } from "./Workout";
import { Crew } from "./Crew";

type DashboardProps = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const Tab = createBottomTabNavigator();

export const Dashboard = ({ navigation }: DashboardProps) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Crew" component={Crew} />
    </Tab.Navigator>
  );
};
