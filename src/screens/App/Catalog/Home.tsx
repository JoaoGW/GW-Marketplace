import { View } from "@gluestack-ui/themed"

import { Navbar } from "@components/NavBar";
import { HomeHeader } from "@components/HomeHeader";

export function Home(){
  return(
    <View flex={1} paddingVertical={30}>
      <HomeHeader/>
      <Navbar/>
    </View>
  )
}