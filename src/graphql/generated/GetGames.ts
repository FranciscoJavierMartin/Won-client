/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGames
// ====================================================

export interface GetGames_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GetGames_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: GetGames_games_data_attributes_cover_data_attributes | null;
}

export interface GetGames_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: GetGames_games_data_attributes_cover_data | null;
}

export interface GetGames_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface GetGames_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: GetGames_games_data_attributes_developers_data_attributes | null;
}

export interface GetGames_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: GetGames_games_data_attributes_developers_data[];
}

export interface GetGames_games_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: GetGames_games_data_attributes_cover | null;
  developers: GetGames_games_data_attributes_developers | null;
  price: number;
}

export interface GetGames_games_data {
  __typename: "GameEntity";
  attributes: GetGames_games_data_attributes | null;
}

export interface GetGames_games {
  __typename: "GameEntityResponseCollection";
  data: GetGames_games_data[];
}

export interface GetGames {
  games: GetGames_games | null;
}

export interface GetGamesVariables {
  limit: number;
}
