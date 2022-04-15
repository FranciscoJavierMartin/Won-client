import Gallery, { GalleryImageProps } from '@/components/Gallery';
import GameDetails, { GameDetailsProps } from '@/components/GameDetails';
import GameInfo, { GameInfoProps } from '@/components/GameInfo';
import TextContent from '@/components/TextContent';
import Base from '@/templates/Base';
import * as S from './styles';

export type GameProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
};

const Game: React.FC<GameProps> = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
}) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
      <S.SectionDescription>
        <TextContent title="Descrition" content={description} />
      </S.SectionDescription>
      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>
    </S.Main>
  </Base>
);

export default Game;
