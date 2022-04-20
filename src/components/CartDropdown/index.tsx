import CartIcon from '@/components/CartIcon';
import CartList from '../CartList';
import Dropdown from '../Dropdown';
import { GameItemProps } from '../GameItem';
import * as S from './styles';

export type CartDropdownProps = {
  items: GameItemProps[];
  total: string;
};

const CartDropdown: React.FC<CartDropdownProps> = ({ items, total }) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
);

export default CartDropdown;
