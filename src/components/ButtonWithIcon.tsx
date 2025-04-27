import { Button, ButtonText } from '@gluestack-ui/themed';

type ButtonProperties = {
  icon: React.ElementType,
  iconColor: string,
  bgColor: string,
  textContent: string,
  textColor: string,
  style?: Object
}

export function ButtonWithIcon({ icon: Icon, iconColor, bgColor, textContent, textColor, style }: ButtonProperties){
  return(
    <Button size="lg" variant="solid" bgColor={ bgColor } style={ style } borderRadius={10}>
      <Icon size={15} color={ iconColor }/>
      <ButtonText ml={10} fontSize="$sm" color={ textColor }>{ textContent }</ButtonText>
    </Button>
  )
}