import {
  Text,
  View,
  Image,
  Button,
  ButtonText,
  ButtonGroup,
  Input,
  InputField,
} from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";
import { NoAuthNavigationProp } from "@routes/noauth.routes";

export function SignUp() {
  const navigation = useNavigation<NoAuthNavigationProp>();

  return (
    <View flex={1} marginVertical={40} >
      <View alignItems="center" marginHorizontal={40}>
        <Image source={require('@assets/Logo2x.png')} alt="" w={100} h={50} mb={15} />
        <Text fontWeight="$bold" fontSize="$xl" mb={10}>Boas vindas!</Text>
        <Text fontSize="$md" textAlign="center">
          Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
        </Text>
      </View>

      <View alignItems="center">
        <ButtonGroup mt={30} mb={20}>
          <Button variant="link" w={110} h={100}>
            <Image source={require('@assets/EditProfile.png')} alt="Edit Profile Photo" w={110} h={100} marginVertical={40} />
          </Button>
        </ButtonGroup>

        <Input //Name Input
          size="lg"
          w="80%"
          isRequired
          mb={15}
        >
          <InputField placeholder="Nome" bgColor="$white" p={20} />
        </Input>
        <Input // Email Input
          size="lg"
          w="80%"
          isRequired
          mb={15}
        >
          <InputField placeholder="E-mail" bgColor="$white" p={20} />
        </Input>
        <Input //Phone Input
          size="lg"
          w="80%"
          isRequired
          mb={15}
        >
          <InputField placeholder="Telefone" bgColor="$white" p={20} />
        </Input>
        <Input //Password Input
          size="lg"
          w="80%"
          isRequired
          mb={15}
        >
          <InputField placeholder="Senha" bgColor="$white" pl={15} type="password" />
        </Input>
        <Input //Confirm Password Input
          size="lg"
          w="80%"
          isRequired
        >
          <InputField placeholder="Confirmar Senha" bgColor="$white" p={20} type="password" />
        </Input>

        <Button mt={25} w="80%" bgColor="$warmGray900">
          <Text color="$white" fontWeight="$bold">Criar</Text>
        </Button>
      </View>

      <View flex={1} mt={20} pt={30} alignItems="center" bgColor="$white">
        <Text>Já tem uma conta?</Text>
        <Button mt={10} w="80%" bgColor="$warmGray300" onPress={ () => navigation.navigate('Login') } style={{ borderRadius: 5 }}>
          <ButtonText color="$black" >Ir para o login</ButtonText>
        </Button>
      </View>
    </View>
  )
}