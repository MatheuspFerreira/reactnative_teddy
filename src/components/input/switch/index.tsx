import { SwitchProps } from "./interface/SwitchProps";
import { SwitchContainer, Label, CustomSwitch } from "./styles";

export function Switch({ isSwitchOn, onToggleSwitch, label }: SwitchProps) {
  return (
    <SwitchContainer>
      {label && <Label>{label}</Label>}
      <CustomSwitch
        value={isSwitchOn}
        onValueChange={() => onToggleSwitch()}
        disabled={false}
        activeText=""
        inActiveText=""
      />
    </SwitchContainer>
  );
}
