import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Home, { HomeProps } from '@/templates/Home';
import { initializeApollo } from '@/utils/apollo';
import { QueryHome } from '@/graphql/generated/QueryHome';
import { QUERY_HOME } from '@/graphql/queries/home';
import { bannerMapper, gamesMapper, highlightMapper } from '@/utils/mappers';

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const apolloClient = initializeApollo();
  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<QueryHome, { limit: number }>({
    query: QUERY_HOME,
    variables: { limit: 10 },
  });

  return {
    revalidate: 10,
    props: {
      banners: bannerMapper(banners!.data),
      newGamesTitle: sections!.data!.attributes!.newGames!.title,
      newGames: gamesMapper(newGames!.data),
      mostPopularGamesTitle: sections!.data!.attributes!.popularGames!.title,
      mostPopularHighlight: highlightMapper(
        sections!.data!.attributes!.popularGames!.highlight
      ),
      mostPopularGames: gamesMapper(
        sections!.data!.attributes!.popularGames!.games!.data
      ),
      upcomingGamesTitle: sections!.data!.attributes!.upcomingGames!.title,
      upcomingGames: gamesMapper(upcomingGames!.data),
      upcomingHighligth: highlightMapper(
        sections!.data!.attributes!.upcomingGames!.highlight!
      ),
      freeGamesTitle: sections!.data!.attributes!.freeGames!.title,
      freeGames: gamesMapper(freeGames!.data),
      freeHighligth: highlightMapper(
        sections!.data!.attributes!.freeGames!.highlight!
      ),
    },
  };
};
