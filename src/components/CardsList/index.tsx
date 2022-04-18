import Heading from '../Heading';
import { PaymentCard } from '../PaymentOptions';
import * as S from './styles';

export type CardsListProps = {
  cards?: PaymentCard[];
};

const CardsList: React.FC<CardsListProps> = ({ cards }) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>
    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
);

export default CardsList;
