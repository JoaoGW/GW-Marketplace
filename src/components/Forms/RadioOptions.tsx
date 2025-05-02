import { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon } from "@gluestack-ui/themed";

import { Circle } from "lucide-react-native";

type RadioOptionsParameters = {
  radioTitle: string,
  styles?: Object
}

export function RadioOptions({ radioTitle, styles }: RadioOptionsParameters) {
  return (
    <RadioGroup style={ styles }>
      <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
        <RadioIndicator>
          <RadioIcon as={Circle} />
        </RadioIndicator>
        <RadioLabel ml={5}>{ radioTitle }</RadioLabel>
      </Radio>
    </RadioGroup>
  );
}