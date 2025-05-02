import {
  Avatar,
  AvatarFallbackText, //It should be modified after the implementation of the API for signup 
  AvatarImage, //It should be modified after the implementation of the API for signup 
} from '@gluestack-ui/themed';

type Props = {
  borderStyle: string;
  iconSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export function AvatarProfile(props: Props) {
  return (
    <Avatar size={ props.iconSize } borderWidth={3} borderColor={ props.borderStyle } borderRadius="100%" mr={5}>
      <AvatarFallbackText>Nome Genérico</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: "https://avatars.githubusercontent.com/u/68306736?v=4",
        }}
        alt="User Profile Photo"
      />
    </Avatar>
  )
}