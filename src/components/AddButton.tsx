import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@gluestack-ui/themed';

import { Plus } from 'lucide-react-native';

type AddButtonProperties = {
  style?: Object
}

export function AddButton({style}: AddButtonProperties) {
  return (
    <Button bgColor='$warmGray300' w={100} h={100} style={style}>
      <ButtonIcon as={ Plus } color='$gray' size='lg'/>
    </Button>
  )
}