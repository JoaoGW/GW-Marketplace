import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, Pressable } from '@gluestack-ui/themed';

import { ListingThumbnail } from './ListingThumbnail';

import { AuthNavigationProp } from '@routes/auth.routes';

type ListingPreviewProps = {
  imageUri: string,
  avatarShow: boolean,
  conditionBadge: boolean,
  title: string,
  price: string,
  activated: boolean
};

export function ListingPreview({ imageUri, avatarShow, conditionBadge, title, price, activated }: ListingPreviewProps) {
  const navigation = useNavigation<AuthNavigationProp>();

  const handleVisitProduct = () => {
    navigation.navigate('ListedProduct');
  };

  return (
    <Pressable
      w="47%"
      maxHeight={230}
      mb={25}
      onPress={handleVisitProduct}
    >
      <ListingThumbnail
        imageUri={imageUri}
        avatarShow={avatarShow}
        conditionBadge={conditionBadge}
        activated={activated}
      />
      <View mt={2}>
        <Text style={{ lineHeight: 20, marginBottom: 0 }}>{ title }</Text>
        <Text
          fontSize="$sm"
          fontWeight="$bold"
          style={{ lineHeight: 20, marginBottom: 0 }}
        >
          R$
          <Text fontWeight="$bold" fontSize="$lg" style={{ lineHeight: 20 }}>
            { price }
          </Text>
        </Text>
      </View>
    </Pressable>
  );
}