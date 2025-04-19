import { View, Text } from "@gluestack-ui/themed";
import { Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Spinner size="large" marginBottom={10}/>
      <Text color="$black" size="lg">Loading ...</Text>
    </View>
  );
}