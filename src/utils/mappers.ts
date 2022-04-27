import {
  QueryHome_banners_data,
  QueryHome_newGames_data,
  QueryHome_sections_data_attributes_popularGames_highlight,
} from '@/graphql/generated/QueryHome';

export const bannerMapper = (banners: QueryHome_banners_data[]) =>
  banners.map((banner) => ({
    img: `http://localhost:1337${
      banner.attributes!.image.data!.attributes!.url
    }`,
    title: banner.attributes!.title,
    subtitle: banner.attributes!.subtitle,
    buttonLabel: banner.attributes!.button!.label,
    buttonLink: banner.attributes!.button!.link,
    ...(banner.attributes!.ribbon && {
      ribbon: banner.attributes!.ribbon.text || undefined,
      ribbonColor: banner.attributes!.ribbon.color || undefined,
      ribbonSize: banner.attributes!.ribbon.size || undefined,
    }),
  }));

export const gamesMapper = (games: QueryHome_newGames_data[]) =>
  games.map((game) => ({
    title: game.attributes!.name,
    slug: game.attributes!.slug,
    developer: game.attributes!.developers!.data[0].attributes!.name,
    img: `http://localhost:1337${
      game.attributes!.cover!.data?.attributes!.url
    }`,
    price: game.attributes!.price,
  }));

export const highlightMapper = (
  highlight: QueryHome_sections_data_attributes_popularGames_highlight
) => ({
  title: highlight!.title,
  subtitle: highlight!.subtitle,
  backgroundImage: `http://localhost:1337${
    highlight!.background.data!.attributes!.url
  }`,
  floatImage: `http://localhost:1337${
    highlight!.floatImage!.data!.attributes!.url
  }`,
  buttonLabel: highlight!.buttonLabel,
  buttonLink: highlight!.buttonLink,
  alignment: highlight!.alignment!,
});
