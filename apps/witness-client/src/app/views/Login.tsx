import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Text, View, Button } from "react-native";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Login">;

export const Login = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Text>Insert google oauth login here</Text>
      <Button
        title="Log in with goog (aka skip and go to workout)"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};
