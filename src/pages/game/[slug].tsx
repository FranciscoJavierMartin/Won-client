import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Game, { GameProps } from '@/templates/Game';
import gamesMock from '@/components/GameCardSlider/mock';
import highligthMock from '@/components/Highlight/mock';
import { initializeApollo } from '@/utils/apollo';
import {
  GET_GAMES_QUERY,
  GET_GAME_BY_SLUG_QUERY,
} from '@/graphql/queries/games';
import { GetGames, GetGamesVariables } from '@/graphql/generated/GetGames';
import {
  GetGameBySlug,
  GetGameBySlugVariables,
} from '@/graphql/generated/GetGameBySlug';
import { useRouter } from 'next/router';
import { Platform } from '@/common/types';
import { GetRecommended } from '@/graphql/generated/GetRecommended';
import { GET_RECOMMENDED } from '@/graphql/queries/recommended';
import { gamesMapper } from '@/utils/mappers';

const apolloClient = initializeApollo();

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();
  return router.isFallback ? null : <Game {...props} />;
}

export const getStaticProps: GetStaticProps<GameProps> = async ({ params }) => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    GetGameBySlug,
    GetGameBySlugVariables
  >({
    query: GET_GAME_BY_SLUG_QUERY,
    variables: {
      slug: {
        eq: params!.slug as string,
      },
    },
  });

  if (!data.games?.data.length) {
    return { notFound: true };
  }

  const game = data.games.data[0].attributes!;

  const { data: recommended } = await apolloClient.query<GetRecommended>({
    query: GET_RECOMMENDED,
  });

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${game?.cover?.data?.attributes?.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description,
      },
      gallery:
        game.gallery?.data.map(({ attributes }) => ({
          src: `http://localhost:1337${attributes!.url}`,
          label: attributes!.label!,
        })) ?? [],
      description: game.description,
      details: {
        developer: game.developers!.data[0].attributes!.name,
        releaseDate: game.release_date,
        platforms: game.platforms!.data.map(
          ({ attributes }) => attributes!.name as Platform
        ),
        publisher: game.publisher!.data!.attributes!.name,
        rating: game.rating,
        genres: game.categories!.data.map(({ attributes }) => attributes!.name),
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highligthMock,
      recommendedTitle:
        recommended.recommended!.data!.attributes!.section.title,
      recommendedGames: gamesMapper(
        recommended.recommended!.data!.attributes!.section.games!.data
      ),
    },
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const { data } = await apolloClient.query<GetGames, GetGamesVariables>({
    query: GET_GAMES_QUERY,
    variables: {
      limit: 9,
    },
  });

  const paths = data.games?.data.map(({ attributes: { slug } }) => ({
    params: { slug },
  }));

  return {
    paths: paths!,
    fallback: false,
  };
};
