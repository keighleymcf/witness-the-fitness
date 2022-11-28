import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, TabParamList } from "../types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Workout } from "../views/Workout";
import { CrewBoard } from "../views/CrewBoard";

type DashboardProps = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const Tab = createBottomTabNavigator<TabParamList>();

export const Dashboard = ({ navigation }: DashboardProps) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen
        name="CrewBoard"
        component={CrewBoard}
        options={{ title: "My crew" }}
      />
    </Tab.Navigator>
  );
};
