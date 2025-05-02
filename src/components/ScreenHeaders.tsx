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
  actionButton?: React.ElementType,
  actionButtonFunctionality?: () => void;
};

export function ScreenHeaders({ actionButton: Icon, actionButtonFunctionality, comeback, headerTitle }: HeaderStyleConfiguration) {
  const navigation = useNavigation();

  return (
    <View justifyContent="space-between" flexDirection="row" alignItems="center" paddingHorizontal={30} h="7%">
      <View alignItems="flex-start" w="10%">
        {comeback === true ? (
          <Button variant="link" onPress={() => navigation.goBack()}>
            <ButtonIcon as={ArrowLeft} size="xl" color="$black" />
          </Button>
        ) : null}
      </View>

      <View alignItems="center" w="80%">
        <Text fontSize="$xl" fontWeight="$bold" color='$black'>
          {headerTitle}
        </Text>
      </View>

      <View alignItems="flex-end" w="10%">
        { Icon ? (
          <Button variant="link" onPress={actionButtonFunctionality}>
            <ButtonIcon as={Icon} size="xl" color="$black" />
          </Button>
        ) : null }
      </View>
    </View>
  );
}