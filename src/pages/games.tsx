import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Games, { GamesProps } from '@/templates/Games';
import filterItemsMock from '@/components/ExploreSidebar/mock';
import { initializeApollo } from '@/utils/apollo';
import { gql } from '@apollo/client';
import { GetGamesQueryResult } from 'graphql/queries/getGames';

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <Games {...props} />;
}

export const getStaticProps: GetStaticProps<GamesProps> = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetGamesQueryResult>({
    query: gql`
      query GetGames {
        games {
          data {
            attributes {
              name
              slug
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              developers {
                data {
                  attributes {
                    name
                  }
                }
              }
              price
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      games: data.games.data.map(
        ({ attributes: { name, developers, cover, price } }) => ({
          title: name,
          developer: developers.data[0].attributes.name,
          img: cover.data?.attributes.url
            ? `http://localhost:1337${cover.data?.attributes.url}`
            : '',
          price: new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
          }).format(price),
        })
      ),
      filterItems: filterItemsMock,
    },
    revalidate: 60,
  };
};
