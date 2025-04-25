import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  Button,
  ButtonIcon
} from '@gluestack-ui/themed';

import { ArrowLeft } from 'lucide-react-native';

type HeaderStyleConfiguration = {
  comeback?: boolean,
  headerTitle?: string,
  actionButton?: React.ReactNode
}

export function ScreenHeaders(props: HeaderStyleConfiguration) {
  const navigation = useNavigation();

  return (
    <View justifyContent='space-between' flexDirection='row' alignItems='center' paddingHorizontal={30} h="7%">
      <View flex={1} alignItems="flex-start">
        {props.comeback === true ? (
          <Button variant="link" onPress={ () => navigation.goBack() }>
            <ButtonIcon as={ArrowLeft} size="xl" color="$black" />
          </Button>
        ) : null}
      </View>

      {/* Segundo elemento: Centralizado */}
      <View flex={1} alignItems="center">
        <Text fontSize="$xl" fontWeight="$bold">
          {props.headerTitle}
        </Text>
      </View>

      {/* Terceiro elemento: Alinhado à direita */}
      <View flex={1} alignItems="flex-end">
        {props.actionButton ? props.actionButton : null}
      </View>
    </View>
  )
}