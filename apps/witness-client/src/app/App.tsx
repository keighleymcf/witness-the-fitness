/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import { RootStackParamList } from "./types/navigation";
import { Workout } from "./views/Workout";
import { Crew } from "./views/Crew";
import { Dashboard } from "./views/Dashboard";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  // const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  // const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Witness the Fitness" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Log in" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Sign up" }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text style={styles.textLg}>Hello there,</Text>
            <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
              Welcome WitnessClient 👋
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.hero}>
              <View style={styles.heroTitle}>
                <Checkmark
                  width={32}
                  height={32}
                  stroke="hsla(162, 47%, 50%, 1)"
                />
                <Text style={[styles.textLg, styles.heroTitleText]}>
                  You're up and running
                </Text>
              </View>
              <TouchableOpacity
                style={styles.whatsNextButton}
                onPress={() => {
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: whatsNextYCoord,
                  });
                }}
              >
                <Text style={[styles.textMd, styles.textCenter]}>
                  What's next?
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
    </NavigationContainer>
  );
};

export default App;
