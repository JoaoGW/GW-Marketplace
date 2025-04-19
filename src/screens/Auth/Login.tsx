import {
  View,
  Text,
  Image,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { NoAuthNavigationProp } from "@routes/noauth.routes";
import { useAuth } from "@contexts/manager.routes";

export function Login() {
  const navigation = useNavigation<NoAuthNavigationProp>();
  const { login } = useAuth();

  return (
    <View flex={1}>
      <View alignItems="center" marginHorizontal={20} marginTop={60}>
        <Image source={require('@assets/Logo2x.png')} alt="" w={150} h={100} />
        <Text fontWeight="$bold" fontSize="$3xl">GW Marketspace</Text>
        <Text fontSize="$sm">Seu espaço de compra e venda</Text>

        <View w="100%" marginVertical={90} alignItems="center">
          <Text textAlign="center" fontSize="$sm" marginBottom={15}>Acesse sua conta</Text>
          <Input // E-mail input
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            marginBottom={20}
            w="80%"
          >
            <InputField placeholder="E-mail" bgColor="$white" pl={15} />
          </Input>
          <Input // Password Input
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            marginBottom={30}
            w="80%"
          >
            <InputField placeholder="Senha" bgColor="$white" pl={15} />
          </Input>

          <Button backgroundColor="$blue500" w="80%" style={{ borderRadius: 5 }} onPress={ login }>
            <ButtonText>
              Entrar
            </ButtonText>
          </Button>
        </View>
      </View>

      <View flex={1} alignItems="center" bgColor="$white" justifyContent="center" paddingBottom={30}>
        <Text mb={10}>Ainda não tem acesso?</Text>
        <Button backgroundColor="$warmGray300" w="75%" style={{ borderRadius: 5 }}>
          <ButtonText color="$black" onPress={() => navigation.navigate('SignUp')}>
            Criar uma conta
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}