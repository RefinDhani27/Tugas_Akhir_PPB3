import React from "react";
import { View, Platform, StatusBar } from "react-native";

export default function SafeArea() {
  const height = Platform.OS === "ios" ? 40 : StatusBar.currentHeight;

  return <View style={{ marginTop: height }} />;
}
