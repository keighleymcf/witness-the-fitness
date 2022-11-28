import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Signup">;

export const Signup = ({ navigation }: HomeProps) => {
  return (
    <SafeAreaView>
      <Text>Insert google oauth signup here</Text>
      <Button
        title="Sign up with goog (aka skip and go to workout)"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </SafeAreaView>
  );
};
