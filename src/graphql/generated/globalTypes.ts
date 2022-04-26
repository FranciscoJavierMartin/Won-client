/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = 'normal',
  small = 'small',
}

export enum ENUM_GAME_RATING {
  FREE = 'FREE',
  pegi12 = 'pegi12',
  pegi16 = 'pegi16',
  pegi18 = 'pegi18',
  pegi3 = 'pegi3',
  pegi7 = 'pegi7',
}

export interface StringFilterInput {
  and?: (string | null)[] | null;
  or?: (string | null)[] | null;
  not?: StringFilterInput | null;
  eq?: string | null;
  ne?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  contains?: string | null;
  notContains?: string | null;
  containsi?: string | null;
  notContainsi?: string | null;
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  null?: boolean | null;
  notNull?: boolean | null;
  in?: (string | null)[] | null;
  notIn?: (string | null)[] | null;
  between?: (string | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
