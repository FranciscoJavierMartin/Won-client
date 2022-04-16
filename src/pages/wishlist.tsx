import Wishlist, { WishlistProps } from '@/templates/Wishlist';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import gamesMock from '@/components/GameCardSlider/mock';
import highligthMock from '@/components/Highlight/mock';

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Wishlist {...props} />;
}

export const getStaticProps: GetStaticProps<WishlistProps> = async () => {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highligthMock,
    },
  };
};
