// app/_layout.tsx
import { useState } from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../gluestack-ui.config";
import { store } from "../src/data/redux/store";
import { Slot } from "expo-router";
import SplashScreen from "./SplashScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <Provider store={store}>
      <GluestackUIProvider config={config} colorMode="dark">
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SplashScreen
              visible={!splashFinished}
              onFinish={() => setSplashFinished(true)}
            />
            <Slot />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Provider>
  );
}
