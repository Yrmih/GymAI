import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GluestackUIProvider } from "@/app/components/ui/gluestack-ui-provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider mode="dark">
        <View style={styles.container}>
          <Text>Alô mundo</Text>
          <StatusBar style="auto" />
        </View>
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
