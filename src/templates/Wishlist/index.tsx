import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import GameCard, { GameCardProps } from '@/components/GameCard';
import { Grid } from '@/components/Grid';
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
      <Grid>
        {games?.map((game, index) => (
          <GameCard {...game} key={`wishlist-${index}`} />
        ))}
      </Grid>
      <Divider />
    </Container>
    <Showcase
      title="you may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;
