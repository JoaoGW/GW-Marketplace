import { 
  View,
  Text,
  Button,
  ButtonText,
  ButtonIcon
} from "@gluestack-ui/themed";

import { Tag, ArrowRight } from "lucide-react-native";

export function ListedProducts(){
  return(
    <View justifyContent="space-between" alignItems="center" bgColor="#6479c737" marginHorizontal={30} h="12.5%" borderRadius={5} flexDirection="row">
      <View maxWidth="50%" alignItems="center" flexDirection="row" p={20}>
      <Tag color="darkblue" size={30} />
      <Text marginLeft={20} fontSize="$md">
        <Text fontWeight="bold" fontSize="$2xl">0</Text>
        {"\n"}
        anúncios ativos
      </Text>
      </View>
      <View maxWidth="50%">
        <Button bgColor="transparent">
          <ButtonText color="$blue900">Meus anúncios </ButtonText>
          <ButtonIcon as={ ArrowRight } color="darkblue"/>
        </Button>
      </View>
    </View>
  )
}