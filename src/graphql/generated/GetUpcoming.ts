/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes';

// ====================================================
// GraphQL query operation: GetUpcoming
// ====================================================

export interface GetUpcoming_upcomingGames_data_attributes_cover_data_attributes {
  __typename: 'UploadFile';
  url: string;
}

export interface GetUpcoming_upcomingGames_data_attributes_cover_data {
  __typename: 'UploadFileEntity';
  attributes: GetUpcoming_upcomingGames_data_attributes_cover_data_attributes | null;
}

export interface GetUpcoming_upcomingGames_data_attributes_cover {
  __typename: 'UploadFileEntityResponse';
  data: GetUpcoming_upcomingGames_data_attributes_cover_data | null;
}

export interface GetUpcoming_upcomingGames_data_attributes_developers_data_attributes {
  __typename: 'Developer';
  name: string;
}

export interface GetUpcoming_upcomingGames_data_attributes_developers_data {
  __typename: 'DeveloperEntity';
  attributes: GetUpcoming_upcomingGames_data_attributes_developers_data_attributes | null;
}

export interface GetUpcoming_upcomingGames_data_attributes_developers {
  __typename: 'DeveloperRelationResponseCollection';
  data: GetUpcoming_upcomingGames_data_attributes_developers_data[];
}

export interface GetUpcoming_upcomingGames_data_attributes {
  __typename: 'Game';
  name: string;
  slug: string;
  cover: GetUpcoming_upcomingGames_data_attributes_cover | null;
  developers: GetUpcoming_upcomingGames_data_attributes_developers | null;
  price: number;
}

export interface GetUpcoming_upcomingGames_data {
  __typename: 'GameEntity';
  attributes: GetUpcoming_upcomingGames_data_attributes | null;
}

export interface GetUpcoming_upcomingGames {
  __typename: 'GameEntityResponseCollection';
  data: GetUpcoming_upcomingGames_data[];
}

export interface GetUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data_attributes {
  __typename: 'UploadFile';
  url: string;
}

export interface GetUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data {
  __typename: 'UploadFileEntity';
  attributes: GetUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data_attributes | null;
}

export interface GetUpcoming_showcase_data_attributes_upcomingGames_highlight_background {
  __typename: 'UploadFileEntityResponse';
  data: GetUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data | null;
}

export interface GetUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data_attributes {
  __typename: 'UploadFile';
  url: string;
}

export interface GetUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data {
  __typename: 'UploadFileEntity';
  attributes: GetUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data_attributes | null;
}

export interface GetUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage {
  __typename: 'UploadFileEntityResponse';
  data: GetUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data | null;
}

export interface GetUpcoming_showcase_data_attributes_upcomingGames_highlight {
  __typename: 'ComponentPageHighlight';
  title: string;
  subtitle: string;
  background: GetUpcoming_showcase_data_attributes_upcomingGames_highlight_background;
  floatImage: GetUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface GetUpcoming_showcase_data_attributes_upcomingGames {
  __typename: 'ComponentPageSection';
  title: string;
  highlight: GetUpcoming_showcase_data_attributes_upcomingGames_highlight | null;
}

export interface GetUpcoming_showcase_data_attributes {
  __typename: 'Home';
  upcomingGames: GetUpcoming_showcase_data_attributes_upcomingGames | null;
}

export interface GetUpcoming_showcase_data {
  __typename: 'HomeEntity';
  attributes: GetUpcoming_showcase_data_attributes | null;
}

export interface GetUpcoming_showcase {
  __typename: 'HomeEntityResponse';
  data: GetUpcoming_showcase_data | null;
}

export interface GetUpcoming {
  upcomingGames: GetUpcoming_upcomingGames | null;
  showcase: GetUpcoming_showcase | null;
}

export interface GetUpcomingVariables {
  date: any;
}
