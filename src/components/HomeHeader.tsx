import {
  View,
  Text,
  Button,
  ButtonText,
  ButtonIcon
} from "@gluestack-ui/themed";

import { AvatarProfile } from "./AvatarProfile";

import { Plus } from "lucide-react-native";

export function HomeHeader() {
  return (
    <View justifyContent="space-between" marginHorizontal={30} mb={40} flexDirection="row">
      <View maxWidth="50%" flexDirection="row" alignItems="center">
        <AvatarProfile iconSize="md" borderStyle="$blue500"/>
        <Text>
          Boas vindas,
          {"\n"}
          <Text fontWeight="bold">Nome Genérico</Text>
        </Text>
      </View>
      <Button bgColor="$warmGray900" mt={5}>
        <ButtonIcon as={ Plus }/>
        <ButtonText>  Criar anúncio</ButtonText>
      </Button>
    </View>
  )
}