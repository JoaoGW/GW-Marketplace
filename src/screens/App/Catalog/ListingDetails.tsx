import { View, Image, Text, ScrollView } from "@gluestack-ui/themed";

import { ScreenHeaders } from "@components/ScreenHeaders";
import { AvatarProfile } from "@components/AvatarProfile";
import { ConditionBadge } from "@components/ProductPreview/ConditionBadge";
import { PaymentMethods } from "@components/PaymentMethods";
import { ButtonWithIcon } from "@components/ButtonWithIcon";

import { Barcode, QrCode, Banknote, CreditCard, Landmark, MessageCircleMore } from 'lucide-react-native';

export function ListingDetails() {
  return (
    <View flex={1}>
      <ScreenHeaders comeback={true} />
      <Image
        source={{ uri: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg' }}
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
            <ConditionBadge badgeTypeColor="new" />
            <View mt={10} flexDirection="row" justifyContent="space-between">
              <Text fontWeight="$bold" fontSize="$xl">Tênis Ardidas</Text>
              <Text fontWeight="$bold" fontSize="$md" color="$blue500">
                R$
                <Text fontWeight="$bold" fontSize="$xl" color="$blue500"> 120,00</Text>
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
                <PaymentMethods icon={Banknote} name="Dinheiro" />
                <PaymentMethods icon={CreditCard} name="Cartão de Crédito" />
                <PaymentMethods icon={Landmark} name="Depósito Bancário" />
              </View>
            </View>
          </View>
        </View>

        <View flexDirection="row" justifyContent="space-between" bgColor="$white" p={25} alignItems="center">
          <Text fontWeight="$bold" fontSize="$md" color="$blue500">
            R$
            <Text fontWeight="$bold" fontSize="$2xl" color="$blue500"> 120,00</Text>
          </Text>
          <ButtonWithIcon bgColor="$blue500" icon={MessageCircleMore} textColor="$white" textContent="Entrar em contato"/>
        </View>
      </ScrollView>
    </View>
  );
}