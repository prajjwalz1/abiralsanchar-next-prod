import { ReactNode } from "react";

//
export type ChildrenSchema = {
  children?: ReactNode;
};

export type TitleSchema = {
  title: string;
};
export type SlugSchema = {
  slug?: string;
};
export interface TitleSlugSchema extends TitleSchema, SlugSchema {}

export type OnClickSchema = {
  onClick?: () => void;
};

//////////////////////////////
// Image/Icons
//////////////////////////////
export type IconSchema = {
  icon?: ReactNode;
};

export interface CustomImageSchema extends OnClickSchema {
  src: string;
  alt: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
  divCss?: string;
  imgCss?: string;
  blurDataURL?: string;
  onClick?: () => void;
}

export type ImagesSchema = {
  img: CustomImageSchema;
};

//////////////////////////////
//
//////////////////////////////
export interface OptionSchema extends IconSchema {
  label: string;
  value: string;
}

//////////////////////////////
// Layouts
//////////////////////////////
export type RootLayoutSchema = {
  children: React.ReactNode;
};

// Css
export type CssSchema = {
  css?: string;
};

export type FlagSchema = {
  isFlag?: boolean;
  setIsFlag?: (val: boolean) => void;
};

//////////////////////////////
// Links
//////////////////////////////
export interface LinkSchema extends TitleSlugSchema, IconSchema {}

export interface NestedLinkSchema extends IconSchema, TitleSchema {
  child: LinkSchema[];
}

//////////////////////////////
// texts
//////////////////////////////
export interface CustomTextSchema
  extends ChildrenSchema,
    CssSchema,
    SlugSchema {
  font?: string;
  isLink?: boolean;
}

//////////////////////////////
// Functions
//////////////////////////////
export type HandleActionSchema = {
  handleAction: () => void;
};

// Button
export interface ButtonSchema extends CssSchema, OnClickSchema {}

// Title and Image
export interface LinkImageSchema extends LinkSchema, ImagesSchema {}
