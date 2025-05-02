import { View, Text } from "@gluestack-ui/themed";

type FormBadgeDetails = {
  badgeTypeColor: 'used' | 'new' | 'unselected',
  condition: 'USADO' | 'NOVO'
}

export function FormConditionBadge(props: FormBadgeDetails) {
  return (
    <View
      bgColor={
        props.badgeTypeColor === 'used'
          ? "$warmGray700"
          : props.badgeTypeColor === 'new'
            ? "$blue500"
            : "$warmGray300"
      }
      borderRadius={20}
      pt={7}
      mt={5}
      mr={5}
      w={
        props.badgeTypeColor === 'used' || props.badgeTypeColor === 'unselected'
          ? '$20'
          : '$16'
      }
      h={30}
      alignItems="center"
    >
      <Text
        color={props.badgeTypeColor === 'new' || props.badgeTypeColor === 'used' ? "$white" : "$black"}
        fontSize="$xs"
      >
        { props.condition }
      </Text>
    </View>
  )
}