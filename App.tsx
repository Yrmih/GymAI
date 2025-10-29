import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider mode="dark">
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Text>Alô mundo</Text>
            <StatusBar style="auto" />
          </SafeAreaView>
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Provider>
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
