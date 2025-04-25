import { View, Text } from '@gluestack-ui/themed';

type PaymentTypes = {
  icon: React.ElementType,
  name: string
}

export function PaymentMethods({icon: Icon, name}: PaymentTypes){
  return(
    <View flexDirection='row'>
      <Icon size={20} color="black"/>
      <Text ml={10}>{ name }</Text>
    </View>
  )
}