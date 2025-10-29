import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { Provider } from "react-redux";
import { store } from "@/src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider mode="dark">
        <SafeAreaProvider>
          <Slot />
          <StatusBar style="light" />
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Provider>
  );
}
