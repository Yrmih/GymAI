import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "@/src/redux/store";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <Provider store={store}>
      <GluestackUIProvider mode="dark">
        <SafeAreaProvider>
          {children}
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Provider>
  );
}


// // Responsável por:
// Redux
// Gluestack UI (tema dark/light)
// SafeAreaProvider (compatibilidade com notch/status bar)