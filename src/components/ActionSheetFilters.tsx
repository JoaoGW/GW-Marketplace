import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  VStack,
  HStack,
  View
} from "@gluestack-ui/themed";

import { FormConditionBadge } from "./Forms/FormConditionBadge";
import { FormSwitch } from "./Forms/FormSwitch";
import { FormCheckboxGroup } from "./Forms/FormCheckboxGroup";

import { useSheetFilters } from "@contexts/SheetFiltersContext";
import { ButtonRegular } from "./ButtonRegular";

export function ActionSheetFilters() {
  const { showActionsheet, setShowActionsheet } = useSheetFilters();

  const handleClose = () => setShowActionsheet(false);

  return (
    <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper mb={20}>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem mb={15}>
          <ActionsheetItemText fontWeight="$bold" fontSize="$xl">Filtrar anúncios</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <VStack flex={1}>
            <ActionsheetItemText fontWeight="$bold" mb={5}>Condição</ActionsheetItemText>
            <HStack ml={5}>
              <FormConditionBadge badgeTypeColor="unselected" condition="NOVO" />
              <FormConditionBadge badgeTypeColor="unselected" condition="USADO" />
            </HStack>
          </VStack>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText fontWeight="$bold" >Aceita troca?</ActionsheetItemText>
          <FormSwitch />
        </ActionsheetItem>
        <ActionsheetItem>
          <VStack flex={1}>
            <ActionsheetItemText fontWeight="$bold" mb={15}>Meios de pagamento aceitos</ActionsheetItemText>
            <View ml={10}>
              <FormCheckboxGroup />
            </View>
          </VStack>
        </ActionsheetItem>
        <ActionsheetItem mt={25}>
          <HStack flex={1} ml={10}>
            <ButtonRegular bgType="$warmGray300" textContent="Resetar Filtros" textColor="$black" style={{ marginRight: 15 }}/>
            <ButtonRegular bgType="$warmGray900" textContent="Aplicar Filtros" textColor="$white" />
          </HStack>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  );
}