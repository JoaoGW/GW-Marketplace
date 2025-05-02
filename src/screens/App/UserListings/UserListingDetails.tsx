import { View, Image, Text, ScrollView } from "@gluestack-ui/themed";

import { ScreenHeaders } from "@components/ScreenHeaders";
import { AvatarProfile } from "@components/AvatarProfile";
import { ConditionBadge } from "@components/ProductPreview/ConditionBadge";
import { PaymentMethods } from "@components/PaymentMethods";
import { ButtonWithIcon } from "@components/ButtonWithIcon";

import { Barcode, QrCode, Banknote, CreditCard, Landmark, Power, Trash } from 'lucide-react-native';

type UserProductStatus = {
  activated: boolean
}

export function UserListingDetials({ activated }: UserProductStatus) {
  return (
    <View flex={1}>
      <ScreenHeaders comeback={true} />
      <Image
        source={{ uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg' }}
        w="100%"
        h="35%"
        resizeMode="cover"
        alt="Product Image"
      />

      <ScrollView>
        <View margin={25}>
          <View flexDirection="row" alignItems="center" mb={20}>
            <AvatarProfile borderStyle="$blue500" iconSize="sm" />
            <Text fontWeight="$bold" ml={10}>Nome Genérico</Text>
          </View>
          <View flexDirection="column">
            <ConditionBadge badgeTypeColor="used" />
            <View mt={10} flexDirection="row" justifyContent="space-between">
              <Text fontWeight="$bold" fontSize="$xl">Jequiti HMMMMM</Text>
              <Text fontWeight="$bold" fontSize="$md" color="$blue500">
                R$
                <Text fontWeight="$bold" fontSize="$xl" color="$blue500"> 299,00</Text>
              </Text>
            </View>
            <Text mt={10}>Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.</Text>
          </View>

          <View>
            <View my={20} flexDirection="row" alignItems="center">
              <Text fontWeight="$bold">Aceita troca?</Text>
              <Text ml={10}>Sim</Text>
            </View>
            <View>
              <Text fontWeight="$bold" mb={10}>Meios de pagamento:</Text>
              <View flexDirection="column" alignItems="flex-start">
                <PaymentMethods icon={Barcode} name="Boleto" />
                <PaymentMethods icon={QrCode} name="Pix" />
                <PaymentMethods icon={Landmark} name="Depósito Bancário" />
              </View>
            </View>
          </View>
        </View>

        <View flexDirection="column" justifyContent="space-between" bgColor="$white" p={25} alignItems="center">
          {activated === true
            ?
              <ButtonWithIcon
                bgColor="$warmGray900"
                icon={Power}
                iconColor="white"
                textColor="$white"
                textContent="Desativar anúncio"
                style={{ width: "100%" }}
              />
            :
              <ButtonWithIcon
                bgColor="$blue500"
                icon={Power}
                iconColor="white"
                textColor="$white"
                textContent="Reativar anúncio"
                style={{ width: "100%" }}
              />
          }
          <View style={{ marginTop: 8, width: "100%" }}>
            <ButtonWithIcon
              bgColor="$warmGray300"
              icon={Trash}
              iconColor="black"
              textColor="$black"
              textContent="Excluir anúncio"
              style={{ width: "100%" }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}