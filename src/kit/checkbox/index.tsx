import { useState } from 'react';
import { Container, Label, Square } from './styled';

type CheckboxProps = {
  $isChecked?: boolean;
  onChange?(flag: boolean): void;
  label?: string;
};

export const Checkbox = ({ $isChecked = false, onChange, label }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>($isChecked);
  return (
    <Container
      onClick={() => {
        setChecked((state) => !state);
        onChange && onChange(!checked);
      }}
    >
      <Square $isChecked={$isChecked} />
      {label && <Label>{label}</Label>}
    </Container>
  );
};
