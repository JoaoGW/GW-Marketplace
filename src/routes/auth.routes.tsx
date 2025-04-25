import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Home } from "@screens/App/Catalog/Home";
import { UserListings } from "@screens/App/UserListings/UserListings";
import { ListingDetails } from "@screens/App/Catalog/ListingDetails";

import { NavbarContext } from "@contexts/NavbarContext";

const Stack = createNativeStackNavigator();

type AuthStackParamList = {
  Home: undefined;
  UserListings: undefined;
  ListedProduct: undefined;
}
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export function AuthRoutes(){
  return(
    <NavbarContext>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="UserListings" component={UserListings}/>
        <Stack.Screen name="ListedProduct" component={ListingDetails}/>
      </Stack.Navigator>
    </NavbarContext>
  )
}