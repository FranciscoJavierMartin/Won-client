import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Games, { GamesProps } from '@/templates/Games';
import gamesMock from '@/components/GameCardSlider/mock';
import filterItemsMock from '@/components/ExploreSidebar/mock';

export default function Index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <Games {...props} />;
}

export const getServerSideProps: GetServerSideProps<GamesProps> = async () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock,
    },
  };
};
