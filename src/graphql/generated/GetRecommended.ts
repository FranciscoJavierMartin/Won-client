/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes';

// ====================================================
// GraphQL query operation: GetRecommended
// ====================================================

export interface GetRecommended_recommended_data_attributes_section_highlight_background_data_attributes {
  __typename: 'UploadFile';
  url: string;
}

export interface GetRecommended_recommended_data_attributes_section_highlight_background_data {
  __typename: 'UploadFileEntity';
  attributes: GetRecommended_recommended_data_attributes_section_highlight_background_data_attributes | null;
}

export interface GetRecommended_recommended_data_attributes_section_highlight_background {
  __typename: 'UploadFileEntityResponse';
  data: GetRecommended_recommended_data_attributes_section_highlight_background_data | null;
}

export interface GetRecommended_recommended_data_attributes_section_highlight_floatImage_data_attributes {
  __typename: 'UploadFile';
  url: string;
}

export interface GetRecommended_recommended_data_attributes_section_highlight_floatImage_data {
  __typename: 'UploadFileEntity';
  attributes: GetRecommended_recommended_data_attributes_section_highlight_floatImage_data_attributes | null;
}

export interface GetRecommended_recommended_data_attributes_section_highlight_floatImage {
  __typename: 'UploadFileEntityResponse';
  data: GetRecommended_recommended_data_attributes_section_highlight_floatImage_data | null;
}

export interface GetRecommended_recommended_data_attributes_section_highlight {
  __typename: 'ComponentPageHighlight';
  title: string;
  subtitle: string;
  background: GetRecommended_recommended_data_attributes_section_highlight_background;
  floatImage: GetRecommended_recommended_data_attributes_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface GetRecommended_recommended_data_attributes_section_games_data_attributes_cover_data_attributes {
  __typename: 'UploadFile';
  url: string;
}

export interface GetRecommended_recommended_data_attributes_section_games_data_attributes_cover_data {
  __typename: 'UploadFileEntity';
  attributes: GetRecommended_recommended_data_attributes_section_games_data_attributes_cover_data_attributes | null;
}

export interface GetRecommended_recommended_data_attributes_section_games_data_attributes_cover {
  __typename: 'UploadFileEntityResponse';
  data: GetRecommended_recommended_data_attributes_section_games_data_attributes_cover_data | null;
}

export interface GetRecommended_recommended_data_attributes_section_games_data_attributes_developers_data_attributes {
  __typename: 'Developer';
  name: string;
}

export interface GetRecommended_recommended_data_attributes_section_games_data_attributes_developers_data {
  __typename: 'DeveloperEntity';
  attributes: GetRecommended_recommended_data_attributes_section_games_data_attributes_developers_data_attributes | null;
}

export interface GetRecommended_recommended_data_attributes_section_games_data_attributes_developers {
  __typename: 'DeveloperRelationResponseCollection';
  data: GetRecommended_recommended_data_attributes_section_games_data_attributes_developers_data[];
}

export interface GetRecommended_recommended_data_attributes_section_games_data_attributes {
  __typename: 'Game';
  name: string;
  slug: string;
  cover: GetRecommended_recommended_data_attributes_section_games_data_attributes_cover | null;
  developers: GetRecommended_recommended_data_attributes_section_games_data_attributes_developers | null;
  price: number;
}

export interface GetRecommended_recommended_data_attributes_section_games_data {
  __typename: 'GameEntity';
  attributes: GetRecommended_recommended_data_attributes_section_games_data_attributes | null;
}

export interface GetRecommended_recommended_data_attributes_section_games {
  __typename: 'GameRelationResponseCollection';
  data: GetRecommended_recommended_data_attributes_section_games_data[];
}

export interface GetRecommended_recommended_data_attributes_section {
  __typename: 'ComponentPagePopularGames';
  title: string;
  highlight: GetRecommended_recommended_data_attributes_section_highlight;
  games: GetRecommended_recommended_data_attributes_section_games | null;
}

export interface GetRecommended_recommended_data_attributes {
  __typename: 'Recommended';
  section: GetRecommended_recommended_data_attributes_section;
}

export interface GetRecommended_recommended_data {
  __typename: 'RecommendedEntity';
  attributes: GetRecommended_recommended_data_attributes | null;
}

export interface GetRecommended_recommended {
  __typename: 'RecommendedEntityResponse';
  data: GetRecommended_recommended_data | null;
}

export interface GetRecommended {
  recommended: GetRecommended_recommended | null;
}
