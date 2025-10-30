import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Provider } from 'react-redux';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '../src/redux/store';
import { config } from '../gluestack-ui.config';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config} colorMode="dark">
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Provider>
  );
}
