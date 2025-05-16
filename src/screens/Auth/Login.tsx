import { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<NoAuthNavigationProp>();
  const { login } = useAuth();

  async function handleLogin() {
    try {
      const loginResponse = await fetch('http://192.168.1.185:3333/login', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: senha }),
      });

      if (!loginResponse.ok) {
        throw new Error('Credenciais inválidas');
      }

      const loginData = await loginResponse.json();
      const token = loginData.token;

      await login(token);

      // Faz a requisição GET para obter os dados do usuário
      const response = await fetch('http://192.168.1.185:3333/users/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Token inválido ou expirado');
      }

      const userData = await response.json();
      console.log('Usuário autenticado:', userData);
    } catch (e) {
      Alert.alert('Erro ao fazer login', 'Verifique suas credenciais e tente novamente.');
    }
  }

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
            marginBottom={20}
            w="80%"
            isRequired
          >
            <InputField placeholder="E-mail" bgColor="$white" pl={15} value={email} onChangeText={setEmail} />
          </Input>
          <Input // Password Input
            size="md"
            marginBottom={30}
            w="80%"
            isRequired
          >
            <InputField placeholder="Senha" bgColor="$white" pl={15} type="password" value={senha} onChangeText={setSenha} />
          </Input>

          <Button backgroundColor="$blue500" w="80%" style={{ borderRadius: 5 }} onPress={handleLogin}>
            <ButtonText>
              Entrar
            </ButtonText>
          </Button>
        </View>
      </View>

      <View flex={1} alignItems="center" bgColor="$white" justifyContent="center" paddingBottom={30}>
        <Text mb={10}>Ainda não tem acesso?</Text>
        <Button backgroundColor="$warmGray300" w="75%" onPress={() => navigation.navigate('SignUp')} style={{ borderRadius: 5 }}>
          <ButtonText color="$black">
            Criar uma conta
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}