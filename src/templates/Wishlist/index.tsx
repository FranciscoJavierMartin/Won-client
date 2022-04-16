import { Container } from '@/components/Container';
import GameCard, { GameCardProps } from '@/components/GameCard';
import Heading from '@/components/Heading';
import { HighlightProps } from '@/components/Highlight';
import Showcase from '@/components/Showcase';
import Base from '@/templates/Base';
// import * as S from './styles';

export type WishlistProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist: React.FC<WishlistProps> = ({
  games,
  recommendedGames,
  recommendedHighlight,
}) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
      {games?.map((game, index) => (
        <GameCard {...game} key={`wishlist-${index}`} />
      ))}
    </Container>
    <Showcase
      title="you may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;
