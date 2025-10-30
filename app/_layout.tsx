// app/_layout.tsx
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Provider } from 'react-redux';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { store } from '../src/redux/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GluestackUIProvider colorMode="dark">
        <SafeAreaProvider>
          <StatusBar style="light" />
          <Slot /> {/* Aqui vai renderizar (auth) ou (main) */}
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Provider>
  );
}
