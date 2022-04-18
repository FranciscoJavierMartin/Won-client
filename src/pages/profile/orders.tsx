import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Profile from '@/templates/Profile';
import itemsMock from '@/components/OrdersList/mock';
import OrdersList, { OrdersListProps } from '@/components/OrdersList';

export default function Index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  );
}

export const getServerSideProps: GetServerSideProps<
  OrdersListProps
> = async () => {
  return {
    props: {
      items: itemsMock,
    },
  };
};
