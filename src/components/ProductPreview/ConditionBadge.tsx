import { View, Text } from "@gluestack-ui/themed";

type BadgeDetails = {
  badgeTypeColor: 'used' | 'new',
}

export function ConditionBadge(props: BadgeDetails){
  return(
    <View 
      bgColor={ props.badgeTypeColor === 'used' ? "$warmGray700" : "$blue900" }
      borderRadius={10}
      p={5}
      mt={5}
      w={ props.badgeTypeColor === 'used' ? '$16' : '$12' }
      h={25}
      alignItems="center"
    >
      <Text color="$white" fontSize="$xs">
        { props.badgeTypeColor === 'used' ? "USADO" : "NOVO" }
      </Text>
    </View>
  )
}