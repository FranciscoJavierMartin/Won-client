import Empty from '../Empty';
import GameItem, { GameItemProps } from '../GameItem';
import Heading from '../Heading';
import * as S from './styles';

export type OrdersListProps = {
  items?: GameItemProps[];
};

const OrdersList: React.FC<OrdersListProps> = ({ items = [] }) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>
    {items.length > 0 ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store"
        hasLink
      />
    )}
  </S.Wrapper>
);

export default OrdersList;
