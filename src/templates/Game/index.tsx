import Base from '@/templates/Base';
import * as S from './styles';

export type GameProps = {
  test?: string;
};

const Game: React.FC<GameProps> = () => (
  <Base>
    <S.Cover
      src="https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg"
      role="image"
      aria-label="cover"
    />
  </Base>
);

export default Game;
