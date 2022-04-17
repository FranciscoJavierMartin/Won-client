import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Cart, { CartProps } from '@/templates/Cart';
import gamesMock from '@/components/GameCardSlider/mock';
import highligthMock from '@/components/Highlight/mock';
import itemsMock from '@/components/CartList/mock';
import cardsMock from '@/components/PaymentOptions/mock';

export default function Index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <Cart {...props} />;
}

export const getServerSideProps: GetServerSideProps<CartProps> = async () => {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highligthMock,
      items: itemsMock,
      total: '129.98 €',
      cards: cardsMock,
    },
  };
};
