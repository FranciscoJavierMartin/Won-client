/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StringFilterInput, ENUM_GAME_RATING } from './globalTypes';

// ====================================================
// GraphQL query operation: GetGameBySlug
// ====================================================

export interface GetGameBySlug_games_data_attributes_gallery_data_attributes {
  __typename: 'UploadFile';
  url: string;
  label: string | null;
}

export interface GetGameBySlug_games_data_attributes_gallery_data {
  __typename: 'UploadFileEntity';
  attributes: GetGameBySlug_games_data_attributes_gallery_data_attributes | null;
}

export interface GetGameBySlug_games_data_attributes_gallery {
  __typename: 'UploadFileRelationResponseCollection';
  data: GetGameBySlug_games_data_attributes_gallery_data[];
}

export interface GetGameBySlug_games_data_attributes_cover_data_attributes {
  __typename: 'UploadFile';
  src: string;
}

export interface GetGameBySlug_games_data_attributes_cover_data {
  __typename: 'UploadFileEntity';
  attributes: GetGameBySlug_games_data_attributes_cover_data_attributes | null;
}

export interface GetGameBySlug_games_data_attributes_cover {
  __typename: 'UploadFileEntityResponse';
  data: GetGameBySlug_games_data_attributes_cover_data | null;
}

export interface GetGameBySlug_games_data_attributes_developers_data_attributes {
  __typename: 'Developer';
  name: string;
}

export interface GetGameBySlug_games_data_attributes_developers_data {
  __typename: 'DeveloperEntity';
  attributes: GetGameBySlug_games_data_attributes_developers_data_attributes | null;
}

export interface GetGameBySlug_games_data_attributes_developers {
  __typename: 'DeveloperRelationResponseCollection';
  data: GetGameBySlug_games_data_attributes_developers_data[];
}

export interface GetGameBySlug_games_data_attributes_publisher_data_attributes {
  __typename: 'Publisher';
  name: string;
}

export interface GetGameBySlug_games_data_attributes_publisher_data {
  __typename: 'PublisherEntity';
  attributes: GetGameBySlug_games_data_attributes_publisher_data_attributes | null;
}

export interface GetGameBySlug_games_data_attributes_publisher {
  __typename: 'PublisherEntityResponse';
  data: GetGameBySlug_games_data_attributes_publisher_data | null;
}

export interface GetGameBySlug_games_data_attributes_categories_data_attributes {
  __typename: 'Category';
  name: string;
}

export interface GetGameBySlug_games_data_attributes_categories_data {
  __typename: 'CategoryEntity';
  attributes: GetGameBySlug_games_data_attributes_categories_data_attributes | null;
}

export interface GetGameBySlug_games_data_attributes_categories {
  __typename: 'CategoryRelationResponseCollection';
  data: GetGameBySlug_games_data_attributes_categories_data[];
}

export interface GetGameBySlug_games_data_attributes_platforms_data_attributes {
  __typename: 'Platform';
  name: string;
}

export interface GetGameBySlug_games_data_attributes_platforms_data {
  __typename: 'PlatformEntity';
  attributes: GetGameBySlug_games_data_attributes_platforms_data_attributes | null;
}

export interface GetGameBySlug_games_data_attributes_platforms {
  __typename: 'PlatformRelationResponseCollection';
  data: GetGameBySlug_games_data_attributes_platforms_data[];
}

export interface GetGameBySlug_games_data_attributes {
  __typename: 'Game';
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING;
  release_date: any | null;
  gallery: GetGameBySlug_games_data_attributes_gallery | null;
  cover: GetGameBySlug_games_data_attributes_cover | null;
  developers: GetGameBySlug_games_data_attributes_developers | null;
  publisher: GetGameBySlug_games_data_attributes_publisher | null;
  categories: GetGameBySlug_games_data_attributes_categories | null;
  platforms: GetGameBySlug_games_data_attributes_platforms | null;
}

export interface GetGameBySlug_games_data {
  __typename: 'GameEntity';
  attributes: GetGameBySlug_games_data_attributes | null;
}

export interface GetGameBySlug_games {
  __typename: 'GameEntityResponseCollection';
  data: GetGameBySlug_games_data[];
}

export interface GetGameBySlug {
  games: GetGameBySlug_games | null;
}

export interface GetGameBySlugVariables {
  slug?: StringFilterInput | null;
}
