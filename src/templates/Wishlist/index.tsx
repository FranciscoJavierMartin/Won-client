import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import Empty from '@/components/Empty';
import GameCard, { GameCardProps } from '@/components/GameCard';
import { Grid } from '@/components/Grid';
import Heading from '@/components/Heading';
import { HighlightProps } from '@/components/Highlight';
import Showcase from '@/components/Showcase';
import Base from '@/templates/Base';

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
      {games && games?.length > 0 ? (
        <Grid>
          {games.map((game, index) => (
            <GameCard {...game} key={`wishlist-${index}`} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}
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
