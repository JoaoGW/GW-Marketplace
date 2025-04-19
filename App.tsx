import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import { useFonts, Karla_300Light, Karla_700Bold } from '@expo-google-fonts/karla';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { View, Text } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

import { Loading } from '@components/Loading';
import { Login } from '@screens/Login';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Karla_300Light, Karla_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#EDECEE" }}>
        <View flex={1}>
          <StatusBar style="auto" />
          
          { fontsLoaded 
            ? <Login/> 
            : <Loading /> 
          }

        </View>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}