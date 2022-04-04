import * as S from './styles';

type Props = {
  title?: string;
  description?: string;
};

const Main: React.FC<Props> = ({
  title = 'Advanced React',
  description = 'TypeScript, ReactJS, NextJS and Styled Components',
}: Props) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Atom image and Advanced React written to the side"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="Developer coding" />
  </S.Wrapper>
);

export default Main;
