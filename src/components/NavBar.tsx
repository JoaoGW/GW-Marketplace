import { useNavigation } from '@react-navigation/native';

import { View } from '@gluestack-ui/themed';

import { House, Tag, LogOut } from 'lucide-react-native';

import { useNavBar } from '@contexts/NavbarContext';
import { AuthNavigationProp } from '@routes/auth.routes';

import { QuitApp } from './QuitApp';

export function Navbar(){
  const { currentActive, setCurrentActive } = useNavBar();
  const navigation = useNavigation<AuthNavigationProp>();

  return(
    <View 
      justifyContent='space-between' 
      position='absolute' 
      bottom={0}
      left={0}
      right={0}
      bgColor='$white'
      alignItems='center'
      flexDirection='row'
      p={25}
      paddingHorizontal={60}
    >
      <House color={ currentActive === 'Home' ? 'black' : 'gray'} size={30} onPress={() => { setCurrentActive("Home"); navigation.navigate('Home'); }}/>
      <Tag color={ currentActive === 'Listings' ? 'black' : 'gray'} size={30} onPress={() => { setCurrentActive("Listings"); navigation.navigate('UserListings'); }}/>
      <QuitApp>
        <LogOut color='red' size={30}/>
      </QuitApp>
    </View>
  )
}