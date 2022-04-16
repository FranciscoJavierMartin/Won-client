import { Container } from '@/components/Container';
import { GameCardProps } from '@/components/GameCard';
import Heading from '@/components/Heading';
import { HighlightProps } from '@/components/Highlight';
import Showcase from '@/components/Showcase';
import Base from '@/templates/Base';
// import * as S from './styles';

export type WishlistProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist: React.FC<WishlistProps> = ({
  recommendedGames,
  recommendedHighlight,
}) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>
    <Showcase
      title="you may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;
