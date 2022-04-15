import GameInfo, { GameInfoProps } from '@/components/GameInfo';
import Base from '@/templates/Base';
import * as S from './styles';

export type GameProps = {
  cover: string;
  gameInfo: GameInfoProps;
};

const Game: React.FC<GameProps> = ({ cover, gameInfo }) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
);

export default Game;
