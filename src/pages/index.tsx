import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Home, { HomeProps } from '@/templates/Home';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/mock';
import { initializeApollo } from '@/utils/apollo';
import { QueryHome, QueryHomeVariables } from '@/graphql/generated/QueryHome';
import { QUERY_HOME } from '@/graphql/queries/home';

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const apolloClient = initializeApollo();
  const {
    data: { banners, newGames },
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { limit: 10 },
  });

  return {
    revalidate: 10,
    props: {
      banners: banners!.data.map((banner) => ({
        img: `http://localhost:1337${
          banner.attributes!.image.data!.attributes!.url
        }`,
        title: banner.attributes!.title,
        subtitle: banner.attributes!.subtitle,
        buttonLabel: banner.attributes!.button!.label,
        buttonLink: banner.attributes!.button!.link,
        ...(banner.attributes?.ribbon && {
          ribbon: banner.attributes.ribbon.text || undefined,
          ribbonColor: banner.attributes.ribbon.color || undefined,
          ribbonSize: banner.attributes.ribbon.size || undefined,
        }),
      })),
      newGames: newGames!.data.map((game) => ({
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `http://localhost:1337${
          game.attributes!.cover!.data!.attributes!.url
        }`,
        price: game.attributes!.price,
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighligth: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock,
    },
  };
};
