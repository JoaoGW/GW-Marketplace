import { useNavigation } from "@react-navigation/native";

import { View, Text, Input, InputField, ScrollView, HStack } from '@gluestack-ui/themed';

import { ScreenHeaders } from "@components/ScreenHeaders";
import { AddButton } from '@components/AddButton';
import { RadioOptions } from "@components/Forms/RadioOptions";
import { FormSwitch } from "@components/Forms/FormSwitch";
import { FormCheckboxGroup } from "@components/Forms/FormCheckboxGroup";

import { AuthNavigationProp } from "@routes/auth.routes";
import { ButtonRegular } from "@components/ButtonRegular";

export function CreateListing() {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <ScrollView flex={1}>
      <View flex={1} mb={38}>
        <ScreenHeaders comeback={true} headerTitle="Criar anúncio" actionButtonFunctionality={() => navigation.navigate('CreateListing')} />

        <View mx={30} mb={30}>
          <Text fontWeight="$bold" mb={10}>Imagens</Text>
          <Text mb={15}>Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!</Text>
          <HStack gap={8}>
            <AddButton />
          </HStack>
        </View>

        <View mx={30} mb={20}>
          <Text fontWeight="$bold" mb={10}>Sobre o produto</Text>

          <Input // Listing Title input
            size="md"
            marginBottom={20}
            isRequired
          >
            <InputField placeholder="Título do anúncio" bgColor="$white" pl={15} fontSize="$sm" />
          </Input>
          <Input // Listing Description input
            size="md"
            marginBottom={20}
            h={200}
            isRequired
          >
            <InputField
              placeholder="Descrição do produto"
              bgColor="$white"
              pl={10}
              pr={10}
              pt={10}
              pb={10}
              fontSize="$sm"
              textAlignVertical="top"
            />
          </Input>

          <View flexDirection="row" mb={25}>
            <RadioOptions radioTitle="Produto novo" styles={{ marginRight: 15 }} />
            <RadioOptions radioTitle="Produto usado" />
          </View>

          <View>
            <Text fontWeight="$bold" mb={10}>Venda</Text>
            <Input // Price input
              size="md"
              marginBottom={20}
              isRequired
            >
              <InputField placeholder="R$ Valor do produto" bgColor="$white" pl={15} fontSize="$sm" />
            </Input>

            <View mb={10}>
              <Text fontWeight="$bold">Aceita troca?</Text>
              <View alignItems="flex-start">
                <FormSwitch />
              </View>
            </View>

            <View>
              <Text fontWeight="$bold" mb={10}>Método de pagamentos aceitos</Text>
              <FormCheckboxGroup />
            </View>
          </View>
        </View>
        <View bgColor="$white" p={25}>
          <HStack flex={1} justifyContent="center" alignItems="center">
            <ButtonRegular bgType="$warmGray300" textContent="Cancelar" textColor="$black" style={{ marginRight: 15 }} />
            <ButtonRegular bgType="$warmGray900" textContent="Avançar" textColor="$white" />
          </HStack>
        </View>
      </View>
    </ScrollView>
  )
}