import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Cart, { CartProps } from '@/templates/Cart';
import itemsMock from '@/components/CartList/mock';
import cardsMock from '@/components/PaymentOptions/mock';
import { gamesMapper, highlightMapper } from '@/utils/mappers';
import { initializeApollo } from '@/utils/apollo';
import { GetRecommended } from '@/graphql/generated/GetRecommended';
import { GET_RECOMMENDED } from '@/graphql/queries/recommended';

export default function Index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <Cart {...props} />;
}

export const getServerSideProps: GetServerSideProps<CartProps> = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetRecommended>({
    query: GET_RECOMMENDED,
  });

  return {
    props: {
      items: itemsMock,
      total: '129.98 €',
      cards: cardsMock,
      recommendedTitle: data.recommended!.data!.attributes!.section.title,
      recommendedGames: gamesMapper(
        data.recommended!.data!.attributes!.section.games!.data
      ),
      recommendedHighlight: highlightMapper(
        data.recommended!.data!.attributes!.section.highlight
      ),
    },
  };
};
