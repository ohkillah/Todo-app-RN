import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default () => (
  <SafeAreaProvider>
    <AppNavigator />
  </SafeAreaProvider>
);
