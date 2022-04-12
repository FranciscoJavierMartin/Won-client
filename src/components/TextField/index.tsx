import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextFieldProps> = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  ...props
}) => {
  const [value, setValue] = useState<string | undefined>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInput) {
      onInput(e.currentTarget.value);
    }

    setValue(e.currentTarget.value);
  };
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type="text" onChange={onChange} value={value} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  );
};
export default TextField;
