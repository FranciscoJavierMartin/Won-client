import Wishlist, { WishlistProps } from '@/templates/Wishlist';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import gamesMock from '@/components/GameCardSlider/mock';
import { initializeApollo } from '@/utils/apollo';
import { GetRecommended } from '@/graphql/generated/GetRecommended';
import { GET_RECOMMENDED } from '@/graphql/queries/recommended';
import { gamesMapper, highlightMapper } from '@/utils/mappers';

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Wishlist {...props} />;
}

export const getStaticProps: GetStaticProps<WishlistProps> = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetRecommended>({
    query: GET_RECOMMENDED,
  });

  return {
    props: {
      games: gamesMock,
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
