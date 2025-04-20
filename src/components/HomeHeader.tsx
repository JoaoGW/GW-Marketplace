import {
  Avatar,
  AvatarFallbackText, //It should be modified after the implementation of the API for signup 
  AvatarImage, //It should be modified after the implementation of the API for signup 
  View,
  Text,
  Button,
  ButtonText,
  ButtonIcon
} from "@gluestack-ui/themed";

import { Plus } from "lucide-react-native";

export function HomeHeader() {
  return (
    <View justifyContent="space-between" marginHorizontal={30} mb={50} flexDirection="row">
      <View maxWidth="50%" flexDirection="row" alignItems="center">
        <Avatar size="md" borderWidth={3} borderColor="$blue500" borderRadius="100%" mr={10}>
          <AvatarFallbackText>Nome Genérico</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://avatars.githubusercontent.com/u/68306736?v=4",
            }}
            alt="User Profile Photo"
          />
        </Avatar>
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