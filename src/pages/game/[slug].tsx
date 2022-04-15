import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Game, { GameProps } from '@/templates/Game';

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Game {...props} />;
}

export const getStaticProps: GetStaticProps<GameProps> = async () => {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality',
      },
    },
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = () => {
  return {
    paths: [{ params: { slug: 'test' } }],
    fallback: false,
  };
};
