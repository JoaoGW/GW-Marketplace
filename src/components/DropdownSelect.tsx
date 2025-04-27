import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@gluestack-ui/themed";

import { ChevronDown } from "lucide-react-native";

export type DropDownSelectDetails = {
  style?: Object
}

export function DropdownSelect({ style }: DropDownSelectDetails) {
  return (
    <Select style={ style }>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Filtrar anúncios" color="$black" />
        <SelectIcon mr={3} as={ ChevronDown } />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="Todos" value="Todos" />
          <SelectItem label="Ativos" value="Ativos" />
          <SelectItem label="Desativados" value="Desativados" />
        </SelectContent>
      </SelectPortal>
    </Select>
  )
}