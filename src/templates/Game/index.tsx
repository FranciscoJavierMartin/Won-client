import { Divider } from '@/components/Divider';
import Gallery, { GalleryImageProps } from '@/components/Gallery';
import { GameCardProps } from '@/components/GameCard';
import GameDetails, { GameDetailsProps } from '@/components/GameDetails';
import GameInfo, { GameInfoProps } from '@/components/GameInfo';
import { HighlightProps } from '@/components/Highlight';
import Showcase from '@/components/Showcase';
import TextContent from '@/components/TextContent';
import Base from '@/templates/Base';
import * as S from './styles';

export type GameProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingTitle?: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
};

const Game: React.FC<GameProps> = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames,
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
        <Divider />
      </S.SectionGameDetails>
      <Showcase
        title={upcomingTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />
      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </Base>
);

export default Game;
