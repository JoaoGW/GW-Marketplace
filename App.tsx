import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { View, Text } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

import { useFonts, Karla_300Light, Karla_700Bold } from '@expo-google-fonts/karla';

import { Loading } from '@components/Loading';



export default function App() {
  const [ fontsLoaded ] = useFonts({ Karla_300Light, Karla_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
        <View flex={1}>
          <StatusBar style="auto" />
          
          { fontsLoaded 
            ? '' 
            : <Loading /> 
          }

        </View>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}