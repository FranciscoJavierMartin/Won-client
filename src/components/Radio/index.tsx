import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelColor?: 'white' | 'black';
  labelFor?: string;
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio: React.FC<RadioProps> = ({
  label,
  onCheck,
  labelColor = 'white',
  labelFor = '',
  value,
  ...props
}) => {
  const onChange = () => {
    if (onCheck) {
      onCheck(value);
    }
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};
export default Radio;
