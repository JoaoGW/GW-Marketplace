import { 
  Input,
  InputField,
  InputSlot,
  InputIcon,
  Divider,
  Button
} from "@gluestack-ui/themed";

import { Search, SlidersVertical } from "lucide-react-native";

import { useSheetFilters } from "@contexts/SheetFiltersContext";

export function SearchBar() {
  const { showActionsheet, setShowActionsheet } = useSheetFilters();

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
        <Button variant="link" onPress={() => setShowActionsheet(true)}>
          <InputIcon as={SlidersVertical} color="black" marginHorizontal={10} />
        </Button>
      </InputSlot>
    </Input>
  )
}