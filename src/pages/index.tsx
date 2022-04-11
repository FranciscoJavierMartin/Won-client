import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Home, { HomeProps } from '@/templates/Home';
import bannersMock from '@/components/BannerSlider/mock';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/ mock';

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock,
    },
  };
};

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Home {...props} />;
}
