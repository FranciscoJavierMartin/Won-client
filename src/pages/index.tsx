import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Home, { HomeProps } from '@/templates/Home';
import bannersMock from '@/components/BannerSlider/mock';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/mock';

export default function Index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <Home {...props} />;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
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
