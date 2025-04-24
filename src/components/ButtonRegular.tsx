import { Button, ButtonText } from '@gluestack-ui/themed';

type ButtonProperties = {
  bgType: string,
  textContent: string,
  textColor: string,
  style?: object
}

export function ButtonRegular(props: ButtonProperties){
  return(
    <Button size="lg" variant="solid" bgColor={ props.bgType } style={ props.style }>
      <ButtonText color={ props.textColor }>{ props.textContent }</ButtonText>
    </Button>
  )
}