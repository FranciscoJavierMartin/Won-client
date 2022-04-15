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
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighligth: HighlightProps;
  upcomingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighligth: HighlightProps;
};

const Home: React.FC<HomeProps> = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighligth,
  upcomingMoreGames,
  freeGames,
  freeHighligth,
}) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>
    <Showcase
      title="Most popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />
    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase highlight={upcomingHighligth} games={upcomingMoreGames} />
    </S.SectionUpcoming>
    <Showcase title="Free Games" highlight={freeHighligth} games={freeGames} />
  </Base>
);

export default Home;
