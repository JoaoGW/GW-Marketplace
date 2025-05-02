import { Button, ButtonText } from '@gluestack-ui/themed';

type ButtonProperties = {
  bgType: string,
  textContent: string,
  textColor: string,
  style?: object,
  onPress: () => void
}

export function ButtonRegular(props: ButtonProperties){
  return(
    <Button w="50%" size="lg" variant="solid" bgColor={ props.bgType } style={ props.style } onPress={ props.onPress }>
      <ButtonText color={ props.textColor }>{ props.textContent }</ButtonText>
    </Button>
  )
}