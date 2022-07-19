import * as Linking from "expo-linking";

import { Pressable, Text, View } from "react-native";

import React from "react";

export default function LinkingSelection() {
  const link = "nester://";
  return (
    <View>
      <Pressable onPress={() => Linking.openURL(`${link}/home`)}>
        <Text>Go Home</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL(`${link}/login`)}>
        <Text>Login</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL(`${link}/login/atelecan`)}>
        <Text>Login With Param</Text>
      </Pressable>
    </View>
  );
}
