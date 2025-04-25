import { Button, ButtonText } from '@gluestack-ui/themed';

type ButtonProperties = {
  icon: React.ElementType,
  bgColor: string,
  textContent: string,
  textColor: string,
  style?: object
}

export function ButtonWithIcon({ icon: Icon, bgColor, textContent, textColor, style }: ButtonProperties){
  return(
    <Button size="lg" variant="solid" bgColor={ bgColor } style={ style } borderRadius={10}>
      <Icon size={20} color="white"/>
      <ButtonText ml={10} fontSize="$sm" color={ textColor }>{ textContent }</ButtonText>
    </Button>
  )
}