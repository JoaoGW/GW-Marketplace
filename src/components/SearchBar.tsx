import { 
  Input,
  InputField,
  InputSlot,
  InputIcon,
  Divider
} from "@gluestack-ui/themed";

import { Search, SlidersVertical } from "lucide-react-native";

export function SearchBar() {
  return (
    <Input
      variant="outline"
      size="xl"
      bgColor="$white"
    >
      <InputField placeholder="Buscar anúncio" fontSize="$lg" color="$warmGray300" />
      <InputSlot mr={5} flexDirection="row">
        <InputIcon as={Search} color="black" marginHorizontal={10} />
        <Divider orientation="vertical" />
        <InputIcon as={SlidersVertical} color="black" marginHorizontal={10} />
      </InputSlot>
    </Input>
  )
}