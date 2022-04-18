import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Profile from '@/templates/Profile';
import CardsList, { CardsListProps } from '@/components/CardsList';
import cardsMock from '@/components/PaymentOptions/mock';

export default function Index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  );
}

export const getServerSideProps: GetServerSideProps<
  CardsListProps
> = async () => {
  return {
    props: {
      cards: cardsMock,
    },
  };
};
