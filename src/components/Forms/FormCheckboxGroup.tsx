import { useState } from "react";

import { 
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
  VStack,
  CheckIcon
} from "@gluestack-ui/themed";

export function FormCheckboxGroup() {
  const [values, setValues] = useState(['UX Research']);

  return (
    <CheckboxGroup value={values} onChange={(keys) => {
      setValues(keys);
    }}>
      <VStack space="md">
        <Checkbox value="Boleto">
          <CheckboxIndicator
            $checked={{ bg: "$blue500" }}
          >
            <CheckboxIcon as={CheckIcon} color="$white" />
          </CheckboxIndicator>
          <CheckboxLabel ml={10}>Boleto</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Pix">
          <CheckboxIndicator
            $checked={{ bg: "$blue500" }}
          >
            <CheckboxIcon as={CheckIcon} color="$white" />
          </CheckboxIndicator>
          <CheckboxLabel ml={10}>Pix</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Dinheiro">
          <CheckboxIndicator
            $checked={{ bg: "$blue500" }}
          >
            <CheckboxIcon as={CheckIcon} color="$white" />
          </CheckboxIndicator>
          <CheckboxLabel ml={10}>Dinheiro</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Cartão de Crédito">
          <CheckboxIndicator
            $checked={{ bg: "$blue500" }}
          >
            <CheckboxIcon as={CheckIcon} color="$white" />
          </CheckboxIndicator>
          <CheckboxLabel ml={10}>Cartão de Crédito</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Cartão de Débito">
          <CheckboxIndicator
            $checked={{ bg: "$blue500" }}
          >
            <CheckboxIcon as={CheckIcon} color="$white" />
          </CheckboxIndicator>
          <CheckboxLabel ml={10}>Cartão de Débito</CheckboxLabel>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  )
}