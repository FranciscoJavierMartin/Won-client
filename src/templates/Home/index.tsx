import { BannerProps } from '@/components/Banner';
import BannerSlider from '@/components/BannerSlider';
import { Container } from '@/components/Container';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import Showcase from '@/components/Showcase';
import Base from '@/templates/Base';
import * as S from './styles';

export type HomeProps = {
  banners: BannerProps[];
  newGamesTitle: string;
  newGames: GameCardProps[];
  mostPopularGamesTitle: string;
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGamesTitle: string;
  upcomingHighligth: HighlightProps;
  upcomingGames: GameCardProps[];
  freeGamesTitle: string;
  freeHighligth: HighlightProps;
  freeGames: GameCardProps[];
};

const Home: React.FC<HomeProps> = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGamesTitle,
  upcomingHighligth,
  upcomingGames,
  freeGamesTitle,
  freeHighligth,
  freeGames,
}) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>
    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />
    <Showcase
      title={upcomingGamesTitle}
      highlight={upcomingHighligth}
      games={upcomingGames}
    />
    <Showcase
      title={freeGamesTitle}
      highlight={freeHighligth}
      games={freeGames}
    />
  </Base>
);

export default Home;
