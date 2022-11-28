import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home = ({ navigation }: HomeProps) => {
  return (
    <SafeAreaView>
      <Text>WITNESS THE FITNESS</Text>
      <Button
        title="Sign up with goog"
        onPress={() => navigation.push("Signup")}
      />
      <Button
        title="Log in with goog"
        onPress={() => navigation.navigate("Login")}
      />
    </SafeAreaView>
  );
};
