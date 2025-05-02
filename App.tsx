import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { useFonts, Karla_700Bold, Karla_400Regular } from '@expo-google-fonts/karla';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { View, Text } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

import { useFonts, Karla_700Bold, Karla_400Regular } from '@expo-google-fonts/karla';

import { Loading } from '@components/Loading';



export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

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