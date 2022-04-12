import { ChangeEventHandler, InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked = false,
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const onChange: ChangeEventHandler<HTMLInputElement> = () => {
    if (onCheck) {
      onCheck(!checked);
    }
    setChecked((prevState) => !prevState);
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};
export default Checkbox;
