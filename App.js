import * as Linking from "expo-linking";

import { StyleSheet, Text, View } from "react-native";

import MainNavigator from "./src/navigation/mainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import config from "./src/deepLinking/linking";
import { useEffect } from "react";

const prefix = Linking.createURL("https://nestertest.com");
export default function App() {
  const linking = {
    prefixes: [prefix],
    config,
  };
  const checkAppSource = async () => {
    const source = await Linking.getInitialURL();
    if (source) {
      console.log("User came from a link");
    } else {
      console.log("User came from the app");
    }
  };

  useEffect(() => {
    checkAppSource();
  }, []);
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <MainNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
