import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, View, Button } from "react-native";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Signup">;

export const Signup = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Text>Insert google oauth signup here</Text>
      <Button
        title="Sign up with goog (aka skip and go to workout)"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};
