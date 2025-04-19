import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Login } from "@screens/Auth/Login";
import { SignUp } from "@screens/Auth/Singup";

const Stack = createNativeStackNavigator();

type NoAuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
}
export type NoAuthNavigationProp = NativeStackNavigationProp<NoAuthStackParamList>;

export function NoAuthRoutes(){
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  )
}