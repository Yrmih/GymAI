import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';


export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
      <Text>Alô mundo</Text>
      <StatusBar style="auto" />
    </View>
    </GluestackUIProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
