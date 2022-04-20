import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { gql, useQuery } from '@apollo/client';
import Home, { HomeProps } from '@/templates/Home';
import bannersMock from '@/components/BannerSlider/mock';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/mock';

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
        data {
          attributes {
            name
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;
  if (data) return <p>{JSON.stringify(data, null, 2)}</p>;

  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
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
