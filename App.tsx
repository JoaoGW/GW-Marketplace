import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import { useFonts, Karla_300Light, Karla_700Bold, Karla_400Regular } from '@expo-google-fonts/karla';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { View } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

import { Loading } from '@components/Loading';
import { Login } from '@screens/Auth/Login';

import { AuthProvider } from '@contexts/manager.routes';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#EDECEE" }}>
        <View flex={1}>
          <StatusBar style="auto" />

          {fontsLoaded
            ? <AuthProvider>
                <Routes />
              </AuthProvider>
            : <Loading />
          }

        </View>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}