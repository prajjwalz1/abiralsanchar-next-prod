import { ReactNode } from "react";

//
export type ChildrenSchema = {
  children?: ReactNode;
};

//////////////////////////////
// Image/Icons
//////////////////////////////
export type IconSchema = {
  icon?: ReactNode;
};

export type CustomImageSchema = {
  src: string;
  alt: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
  divCss?: string;
  imgCss?: string;
  blurDataURL?: string;
  onClick?: () => void;
};

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
  css: string;
};

export type FlagSchema = {
  isFlag?: boolean;
  setIsFlag?: (val: boolean) => void;
};

//////////////////////////////
// Links
//////////////////////////////
export interface LinkSchema extends IconSchema {
  title: string;
  slug: string;
}

export interface NestedLinkSchema extends IconSchema {
  title: string;
  child: LinkSchema[];
}

//////////////////////////////
//Functions
//////////////////////////////
export type HandleActionSchema = {
  handleAction: () => void;
};

// Button
export type ButtonSchema = {
  onClick?: () => void;
  css?: string;
};

// Title and Image
export interface LinkImageSchema extends LinkSchema, ImagesSchema {}
