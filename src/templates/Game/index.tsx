import Base from '@/templates/Base';
import * as S from './styles';

export type GameProps = {
  cover: string;
};

const Game: React.FC<GameProps> = ({ cover }) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
  </Base>
);

export default Game;
