import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, Pressable } from '@gluestack-ui/themed';

import { AvatarProfile } from '@components/AvatarProfile';
import { ConditionBadge } from './ConditionBadge';

import { AuthNavigationProp } from '@routes/auth.routes';

export function ListingPreview() {
  const navigation = useNavigation<AuthNavigationProp>();

  const handleVisitProduct = () => {
    navigation.navigate('ListedProduct');
  };

  return (
    <Pressable
      w="47%"
      maxHeight={230}
      mb={25}
      onPress={ handleVisitProduct }
    >
      <View>
        <Image
          source={{
            uri: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg',
          }}
          alt="Product"
          w={200}
          h={110}
          resizeMode="cover"
          borderRadius={7}
        />
        <View
          position="absolute"
          top={0}
          left={0}
          right={0}
          p={5}
          flexDirection="row"
          justifyContent="space-between"
        >
          <AvatarProfile iconSize="sm" borderStyle="$white" />
          <ConditionBadge badgeTypeColor="new" />
        </View>
      </View>
      <View mt={2}>
        <Text style={{ lineHeight: 20, marginBottom: 0 }}>Tênis Vermelho</Text>
        <Text
          fontSize="$sm"
          fontWeight="$bold"
          style={{ lineHeight: 20, marginBottom: 0 }}
        >
          R$
          <Text fontWeight="$bold" fontSize="$lg" style={{ lineHeight: 20}}>
            59,90
          </Text>
        </Text>
      </View>
    </Pressable>
  );
}