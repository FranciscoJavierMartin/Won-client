import Link from 'next/link';
import GameItem, { GameItemProps } from '@/components/GameItem';
import Button from '@/components/Button';
import Empty from '@/components/Empty';
import * as S from './styles';

export type CartListProps = {
  items?: GameItemProps[];
  total?: string;
  hasButton?: boolean;
};

const CartList: React.FC<CartListProps> = ({
  items = [],
  total,
  hasButton = false,
}) => (
  <S.Wrapper isEmpty={items.length === 0}>
    {items.length > 0 ? (
      <>
        {items.map((item) => (
          <GameItem {...item} key={item.title} />
        ))}
        <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total}</S.Total>
          {hasButton && (
            <Link href="/cart">
              <Button as="a">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore games and offers."
        hasLink
      />
    )}
  </S.Wrapper>
);

export default CartList;
