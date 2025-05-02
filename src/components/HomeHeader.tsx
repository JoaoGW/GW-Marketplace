import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  Button,
  ButtonText,
  ButtonIcon
} from "@gluestack-ui/themed";

import { AvatarProfile } from "./AvatarProfile";

import { Plus } from "lucide-react-native";

import { AuthNavigationProp } from "@routes/auth.routes";

export function HomeHeader() {
  const navigation = useNavigation<AuthNavigationProp>();

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
      <Button bgColor="$warmGray900" mt={5} onPress={() => navigation.navigate('CreateListing')}>
        <ButtonIcon as={ Plus }/>
        <ButtonText>  Criar anúncio</ButtonText>
      </Button>
    </View>
  )
}