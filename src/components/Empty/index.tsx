import Link from 'next/link';
import Button from '@/components/Button';
import * as S from './styles';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

const Empty: React.FC<EmptyProps> = ({ title, description, hasLink }) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogames"
      role="image"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to Store</Button>
      </Link>
    )}
  </S.Wrapper>
);

export default Empty;
