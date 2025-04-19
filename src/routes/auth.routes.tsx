import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Catalog } from "@screens/App/Catalog";
import { UserListings } from "@screens/App/UserListings";

const Stack = createNativeStackNavigator();

type AuthStackParamList = {
  Catalog: undefined;
  UserListings: undefined;
}
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export function AuthRoutes(){
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Catalog" component={Catalog}/>
      <Stack.Screen name="UserListings" component={UserListings}/>
    </Stack.Navigator>
  )
}