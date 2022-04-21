import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Games, { GamesProps } from '@/templates/Games';
import filterItemsMock from '@/components/ExploreSidebar/mock';
import { initializeApollo } from '@/utils/apollo';
import { GetGamesQueryResult } from '@/graphql/responses/getGames';
import { GET_GAMES_QUERY } from '@/graphql/queries/games';

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Games {...props} />;
}

export const getStaticProps: GetStaticProps<GamesProps> = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    GetGamesQueryResult,
    { limit: number }
  >({
    query: GET_GAMES_QUERY,
    variables: {
      limit: 9,
    },
  });

  console.log('L', data.games.data.length);

  return {
    props: {
      games: data.games.data.map(
        ({ attributes: { name, developers, cover, price } }) => ({
          title: name,
          developer: developers.data[0].attributes.name,
          img: cover.data?.attributes.url
            ? `http://localhost:1337${cover.data?.attributes.url}`
            : '',
          price: new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(price),
        })
      ),
      filterItems: filterItemsMock,
    },
    revalidate: 60,
  };
};
