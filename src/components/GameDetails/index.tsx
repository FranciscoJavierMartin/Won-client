import Heading from '@/components/Heading';
import MediaMatch from '@/components/MediaMatch';
import * as S from './styles';

export type GameDetailsProps = {
  test?: boolean;
};

const GameDetails: React.FC<GameDetailsProps> = () => (
  <S.Wrapper>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary">
        Game details
      </Heading>
    </MediaMatch>
    <S.Content>
      <S.Block>
        <S.Label>Developer</S.Label>
        <S.Description>BioWare</S.Description>
      </S.Block>
      <S.Block>
        <S.Label>Release Date</S.Label>
        <S.Description>Oct 29, 2010</S.Description>
      </S.Block>
      <S.Block>
        <S.Label>Platforms</S.Label>
      </S.Block>
      <S.Block>
        <S.Label>Publisher</S.Label>
        <S.Description>EA</S.Description>
      </S.Block>
      <S.Block>
        <S.Label>Rating</S.Label>
        <S.Description>18+</S.Description>
      </S.Block>
      <S.Block>
        <S.Label>Genres</S.Label>
        <S.Description>Role-playing / Adventure / Fantasy</S.Description>
      </S.Block>
    </S.Content>
  </S.Wrapper>
);

export default GameDetails;
