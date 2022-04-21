export interface Attributes2 {
  url: string;
}

export interface Data2 {
  attributes: Attributes2;
}

export interface Cover {
  data: Data2;
}

export interface Attributes3 {
  name: string;
}

export interface Datum2 {
  attributes: Attributes3;
}

export interface Developers {
  data: Datum2[];
}

export interface Attributes {
  name: string;
  slug: string;
  cover: Cover;
  developers: Developers;
  price: number;
}

export interface Datum {
  attributes: Attributes;
}

export interface Games {
  data: Datum[];
}

// export interface Data {
//   games: Games;
// }

export interface GetGamesQueryResult {
  games: Games;
}

// export interface GetGamesQueryResult {
//   data: Data;
// }
