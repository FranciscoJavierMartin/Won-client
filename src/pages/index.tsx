import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Home, { HomeProps } from '@/templates/Home';
import { initializeApollo } from '@/utils/apollo';
import { QueryHome } from '@/graphql/generated/QueryHome';
import { QUERY_HOME } from '@/graphql/queries/home';

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
      newGamesTitle: sections!.data!.attributes!.newGames!.title,
      newGames: newGames!.data.map((game) => ({
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `http://localhost:1337${
          game.attributes!.cover!.data!.attributes!.url
        }`,
        price: game.attributes!.price,
      })),
      mostPopularGamesTitle: sections!.data!.attributes!.popularGames!.title,
      mostPopularHighlight: {
        title: sections!.data!.attributes!.popularGames!.highlight.title,
        subtitle: sections!.data!.attributes!.popularGames!.highlight.subtitle,
        backgroundImage: `http://localhost:1337${
          sections!.data!.attributes!.popularGames!.highlight.background.data!
            .attributes!.url
        }`,
        floatImage: `http://localhost:1337${
          sections!.data!.attributes!.popularGames!.highlight.floatImage!.data!
            .attributes!.url
        }`,
        buttonLabel:
          sections!.data!.attributes!.popularGames!.highlight.buttonLabel,
        buttonLink:
          sections!.data!.attributes!.popularGames!.highlight.buttonLink,
        alignment:
          sections!.data!.attributes!.popularGames!.highlight.alignment!,
      },
      mostPopularGames:
        sections!.data!.attributes!.popularGames!.games!.data.map((game) => ({
          title: game.attributes!.name,
          slug: game.attributes!.slug,
          developer: game.attributes!.developers!.data[0].attributes!.name,
          img: `http://localhost:1337${
            game.attributes!.cover!.data?.attributes!.url
          }`,
          price: game.attributes!.price,
        })),
      upcomingGamesTitle: sections!.data!.attributes!.upcomingGames!.title,
      upcomingGames: upcomingGames!.data.map((game) => ({
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `http://localhost:1337${
          game.attributes!.cover!.data!.attributes!.url
        }`,
        price: game.attributes!.price,
      })),
      upcomingHighligth: {
        title: sections!.data!.attributes!.upcomingGames!.highlight!.title,
        subtitle:
          sections!.data!.attributes!.upcomingGames!.highlight!.subtitle,
        backgroundImage: `http://localhost:1337${
          sections!.data!.attributes!.upcomingGames!.highlight!.background.data!
            .attributes!.url
        }`,
        floatImage: `http://localhost:1337${
          sections!.data!.attributes!.upcomingGames!.highlight!.floatImage!
            .data!.attributes!.url
        }`,
        buttonLabel:
          sections!.data!.attributes!.upcomingGames!.highlight!.buttonLabel,
        buttonLink:
          sections!.data!.attributes!.upcomingGames!.highlight!.buttonLink,
        alignment:
          sections!.data!.attributes!.upcomingGames!.highlight!.alignment!,
      },
      freeGamesTitle: sections!.data!.attributes!.freeGames!.title,
      freeGames: freeGames!.data.map((game) => ({
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `http://localhost:1337${
          game.attributes!.cover!.data!.attributes!.url
        }`,
        price: game.attributes!.price,
      })),
      freeHighligth: {
        title: sections!.data!.attributes!.freeGames!.highlight!.title,
        subtitle: sections!.data!.attributes!.freeGames!.highlight!.subtitle,
        backgroundImage: `http://localhost:1337${
          sections!.data!.attributes!.freeGames!.highlight!.background.data!
            .attributes!.url
        }`,
        floatImage: `http://localhost:1337${
          sections!.data!.attributes!.freeGames!.highlight!.floatImage!.data!
            .attributes!.url
        }`,
        buttonLabel:
          sections!.data!.attributes!.freeGames!.highlight!.buttonLabel,
        buttonLink:
          sections!.data!.attributes!.freeGames!.highlight!.buttonLink,
        alignment: sections!.data!.attributes!.freeGames!.highlight!.alignment!,
      },
    },
  };
};
