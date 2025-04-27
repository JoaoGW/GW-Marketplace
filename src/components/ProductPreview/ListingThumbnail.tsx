import { View, Text, Image } from '@gluestack-ui/themed';

import { AvatarProfile } from '@components/AvatarProfile';
import { ConditionBadge } from './ConditionBadge';

type ListingThumbnailInformation = {
  imageUri: string,
  avatarShow: boolean,
  conditionBadge: boolean,
  activated: boolean
}

export function ListingThumbnail(props: ListingThumbnailInformation) {
  return (
    <View>
      <Image
        source={{
          uri: props.imageUri,
        }}
        alt="Product"
        w={200}
        h={110}
        resizeMode="cover"
        borderRadius={7}
        style={{
          opacity: props.activated ? 1 : 0.5,
        }}
      />
      <View
        position="absolute"
        top={0}
        left={0}
        right={0}
        p={5}
        flexDirection="row"
        justifyContent={ props.avatarShow ? 'space-between' : 'flex-end' }
      >
        { props.avatarShow === true ? <AvatarProfile iconSize="sm" borderStyle="$white" /> : null }
        { props.conditionBadge === true ? <ConditionBadge badgeTypeColor="new" /> : null }
      </View>
        { props.activated === true ? null : <Text flex={1} textTransform='uppercase' color='$white' fontWeight="$bold" fontSize="$sm" textAlign='center' position='absolute' bottom={3} left={0} right={0}>Anúncio desativado</Text> }
    </View>
  )
}