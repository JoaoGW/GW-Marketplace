import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Home } from "@screens/App/Catalog/Home";
import { UserListings } from "@screens/App/UserListings/UserListings";

const Stack = createNativeStackNavigator();

type AuthStackParamList = {
  Catalog: undefined;
  UserListings: undefined;
}
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export function AuthRoutes(){
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="UserListings" component={UserListings}/>
    </Stack.Navigator>
  )
}