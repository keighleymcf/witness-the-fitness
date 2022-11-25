import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, Button, View } from "react-native";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Text>WITNESS THE FITNESS</Text>
      <Button
        title="Sign up with goog"
        onPress={() => navigation.push("Signup")}
      />
      <Button
        title="Log in with goog"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
