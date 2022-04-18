import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextFieldProps> = ({
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  onInput,
  disabled = false,
  error,
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
    <S.Wrapper disabled={disabled} error={!!error}>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};
export default TextField;
