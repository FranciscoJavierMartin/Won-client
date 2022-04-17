import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import Heading from '@/components/Heading';
import Showcase from '@/components/Showcase';
import Base from '@/templates/Base';
import { HighlightProps } from '@/components/Highlight';
import { GameCardProps } from '@/components/GameCard';
import * as S from './styles';
import CartList, { CartListProps } from '@/components/CartList';
import PaymentOptions, {
  PaymentOptionsProps,
} from '@/components/PaymentOptions';

export type CartProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const Cart: React.FC<CartProps> = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}) => {
  const handlePayment = () => {
    console.log('Hello');
  };

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>
        <S.Content>
          <CartList items={items} total={total} />
          <PaymentOptions handlePayment={handlePayment} cards={cards} />
        </S.Content>
        <Divider />
      </Container>
      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;