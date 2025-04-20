import { Text, View } from "@gluestack-ui/themed"

import { Navbar } from "@components/NavBar";
import { SearchBar } from "@components/SearchBar";
import { HomeHeader } from "@components/HomeHeader";
import { ListedProducts } from "@components/ListedProducts";

export function Home(){
  return(
    <View flex={1} paddingVertical={30}>
      <HomeHeader/>
      <ListedProducts/>

      <View marginHorizontal={30} marginTop={45}>
        <Text mb={15}>Compre produtos variados</Text>
        <SearchBar/>
      </View>
      <Navbar/>
    </View>
  )
}