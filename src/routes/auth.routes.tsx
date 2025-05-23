import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Home } from "@screens/App/Catalog/Home";
import { UserListings } from "@screens/App/UserListings/UserListings";
import { ListingDetails } from "@screens/App/Catalog/ListingDetails";
import { UserListingDetials } from "@screens/App/UserListings/UserListingDetails";
import { CreateListing } from "@screens/App/Managing/CreateListing";
import { PreviewListing } from "@screens/App/Managing/PreviewListing";

import { NavbarContext } from "@contexts/NavbarContext";

const Stack = createNativeStackNavigator();

type AuthStackParamList = {
  Home: undefined;
  UserListings: undefined;
  ListedProduct: undefined;
  UserListedProduct: undefined;
  CreateListing: undefined;
  Preview: undefined;
}
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export function AuthRoutes(){
  return(
    <NavbarContext>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="UserListings" component={UserListings}/>
        <Stack.Screen name="ListedProduct" component={ListingDetails}/>
        <Stack.Screen name="UserListedProduct">
          { () => <UserListingDetials activated={true} /> }
        </Stack.Screen>
        <Stack.Screen name="CreateListing" component={CreateListing}/>
        <Stack.Screen name="Preview" component={PreviewListing}/>
      </Stack.Navigator>
    </NavbarContext>
  )
}