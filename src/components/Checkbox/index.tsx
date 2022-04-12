import { ChangeEventHandler, InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
}) => {
  const [checked, setChecked] = useState<boolean>(false);

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
