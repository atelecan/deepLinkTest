import * as Linking from "expo-linking";

import { StyleSheet, Text, View } from "react-native";

import MainNavigator from "./src/navigation/mainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import config from "./src/deepLinking/linking";

const prefix = Linking.createURL("/");
export default function App() {
  const linking = {
    prefixes: [prefix],
    config,
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
