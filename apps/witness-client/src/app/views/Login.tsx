import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Login">;

export const Login = ({ navigation }: HomeProps) => {
  return (
    <SafeAreaView>
      <Text>Insert google oauth login here</Text>
      <Button
        title="Log in with goog (aka skip and go to workout)"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </SafeAreaView>
  );
};
