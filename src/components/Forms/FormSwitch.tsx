import { Switch } from "@gluestack-ui/themed";

export function FormSwitch() {
  return (
    <Switch
      size="lg"
      isDisabled={false}
      trackColor={{ false: "$warmGray300", true: "$blue500" }}
      thumbColor="$white"
      ios_backgroundColor="$warmGray300"
    />
  )
}