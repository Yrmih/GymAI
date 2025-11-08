import React, { useState } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Provider } from "react-redux";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "../src/redux/store";
import { config } from "../gluestack-ui.config";
import SplashScreen from "./SplashScreen";

/**
 * Componente interno para gerenciar a lógica de exibição do splash.
 * É renderizado *dentro* dos Providers para ter acesso ao Redux.
 */
function AppLogic() {
  const [showSplash, setShowSplash] = useState(true);

  // Esta função será chamada pelo SplashScreen quando o vídeo terminar
  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    // Passamos a função 'handleSplashFinish' como uma prop 'onFinish'
    // para o SplashScreen
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  // <Slot /> renderiza a rota atual (sua pasta /app)
  return <Slot />;
}

// O RootLayout agora SÓ define os Providers
export default function RootLayout() {
  return (
    // O Provider do Redux envolve TUDO
    <Provider store={store}>
      <GluestackUIProvider config={config} colorMode="dark">
        <SafeAreaProvider>
          {/* A lógica do App/Splash acontece AQUI DENTRO */}
          <AppLogic />
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Provider>
  );
}