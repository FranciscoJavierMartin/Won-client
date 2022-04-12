import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  labelFor = '',
  labelColor = 'white',
}) => (
  <S.Wrapper>
    <input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label labelColor={labelColor} htmlFor={labelFor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
);

export default Checkbox;
