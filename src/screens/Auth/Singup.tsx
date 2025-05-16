import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import {
  Text,
  View,
  Image,
  Button,
  ButtonText,
  Input,
  InputField,
} from "@gluestack-ui/themed";

import { NoAuthNavigationProp } from "@routes/noauth.routes";
import { Alert, TouchableOpacity } from "react-native";

type User = {
  avatar: string,
  nome: string,
  email: string,
  telefone: string,
  senha: string
}

export function SignUp() {
  const navigation = useNavigation<NoAuthNavigationProp>();
  const [registroUsuario, setRegistroUsuario] = useState<User>({
    avatar: "",
    nome: "",
    email: "",
    telefone: "",
    senha: ""
  });
  const [fotoUsuario, setFotoUsuario] = useState<string | null>(null);
  const [confirmarSenha, setConfirmarSenha] = useState<string>();
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [loading, setIsLoading] = useState<boolean>(false);

  // Para enviar as informações de cadastro do usuário a API e registrar no Database
  async function criarUsuario({ avatar, nome, email, telefone, senha }: User): Promise<void> {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('avatar', {
        uri: fotoUsuario,
        name: 'avatar.jpg',
        type: 'image/jpeg',
      } as any);
      formData.append('name', nome);
      formData.append('email', email);
      formData.append('tel', telefone);
      formData.append('password', senha);

      const response = await fetch('http://192.168.1.185:3333/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro ao criar usuário:', errorData);
        throw new Error(`Erro ao criar usuário. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Usuário criado com sucesso:', data);
      
      if (data.token) {
        await AsyncStorage.setItem('token', data.token);
      }

      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Analisa as alterações nos campos de input, para ajudar na validação das informações e que todos os campos estejam preenchidos
  function handleInputChange(field: keyof User, value: string) {
    setRegistroUsuario((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // Método default da documentação do Expo para inserir uma imagem
  const selecionarFotoPerfil = async () => {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [3, 4],
      allowsEditing: true,
      base64: true
    })

    if (photoSelected.canceled) {
      return;
    }

    const photoUri = photoSelected.assets[0].uri;

    if (photoUri) {
      const photoInfo = await FileSystem.getInfoAsync(photoUri) as { size: number }

      if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 3) {
        return Alert.alert("Por favor, escolha uma imagem com menos de 3MB!")
      }

      setFotoUsuario(photoUri);
    }
  };

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
        <TouchableOpacity onPress={selecionarFotoPerfil}>
          <Image
            source={
              fotoUsuario
                ? { uri: fotoUsuario }
                : require('@assets/EditProfile.png')
            }
            alt="Edit Profile Photo"
            w={110}
            h={fotoUsuario ? 110 : 100}
            marginVertical={40}
            borderRadius={fotoUsuario ? 100 : undefined}
          />
        </TouchableOpacity>

        <Input //Name Input
          size="lg"
          w="80%"
          isRequired
          mb={15}
        >
          <InputField
            placeholder="Nome"
            bgColor="$white"
            p={20}
            value={registroUsuario?.nome}
            onChangeText={(value) => handleInputChange('nome', value)}
          />
        </Input>
        <Input //Email Input
          size="lg"
          w="80%"
          isRequired
          mb={15}
        >
          <InputField
            placeholder="E-mail"
            bgColor="$white"
            p={20}
            value={registroUsuario?.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
        </Input>
        <Input //Phone Input
          size="lg"
          w="80%"
          isRequired
          mb={15}
        >
          <InputField
            placeholder="Telefone"
            bgColor="$white"
            p={20}
            value={registroUsuario?.telefone}
            onChangeText={(value) => handleInputChange('telefone', value)}
          />
        </Input>
        <Input //Password Input
          size="lg"
          w="80%"
          isRequired
          mb={15}
        >
          <InputField
            placeholder="Senha"
            bgColor="$white"
            pl={15}
            type="password"
            value={registroUsuario?.senha}
            onChangeText={(value) => handleInputChange('senha', value)}
          />
        </Input>

        {mensagemErro && <Text color="$red500"> {mensagemErro} </Text>}

        <Input //Confirm Password Input
          size="lg"
          w="80%"
          isRequired
        >
          <InputField
            placeholder="Confirmar Senha"
            bgColor="$white"
            p={20}
            type="password"
            value={confirmarSenha}
            onChangeText={(value) => { setConfirmarSenha(value) }}
          />
        </Input>

        <Button
          mt={25}
          w="80%"
          bgColor="$warmGray900"
          disabled={loading}
          onPress={() => {
            if (registroUsuario) {
              if (confirmarSenha !== registroUsuario.senha) {
                setMensagemErro("As senhas inseridas não são iguais. Tente novamente!");
                return;
              }
              if (!registroUsuario.nome || !registroUsuario.email || !registroUsuario.telefone || !registroUsuario.senha) {
                setMensagemErro("Por favor, preencha todos os campos obrigatórios.");
                return;
              }
              if (!fotoUsuario) {
                setMensagemErro("Por favor, selecione uma foto.");
                return;
              }
              criarUsuario({
                ...registroUsuario,
                avatar: fotoUsuario
              });
            }
            navigation.navigate('Login');
          }}
        >
          <Text color="$white" fontWeight="$bold">Criar</Text>
        </Button>
      </View>

      <View flex={1} mt={20} pt={30} alignItems="center" bgColor="$white">
        <Text>Já tem uma conta?</Text>
        <Button mt={10} w="80%" bgColor="$warmGray300" onPress={() => navigation.navigate('Login')} style={{ borderRadius: 5 }}>
          <ButtonText color="$black" >Ir para o login</ButtonText>
        </Button>
      </View>
    </View>
  )
}