import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type ButtonTypeSchema = {
  type?: "button" | "submit" | "reset" | undefined;
};
//
export type FontSizeSchema =
  | "main_title"
  | "title"
  | "sub_title"
  | "heading"
  | "sub_heading"
  | "large"
  | "body"
  | "paragraph"
  | "slight_para"
  | "span"
  | "small";

export type FontWeightSchema =
  | "normal"
  | "medium"
  | "semi_bold"
  | "bold"
  | "extra_bold";

export type ChildrenSchema = {
  children?: ReactNode;
};

export type ColorSchema = {
  color?: string;
};

export type TitleSchema = {
  title?: string;
};

export type FontSchema = {
  font?: string;
};

export type SlugSchema = {
  slug?: string;
};

export interface TitleFontSchema extends TitleSchema, FontSchema, CssSchema {}

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
  src: string | StaticImageData;
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
// sections
//////////////////////////////
export type BannerSectionSchema = {
  imageProps?: CustomImageSchema;
  divProps?: CustomImageSchema;
};

//////////////////////////////
// tags
//////////////////////////////
export type CustomTagSchema = {
  title: string;
  status?: "success" | "warning" | "error" | "info";
  css?: string;
};

//////////////////////////////
// texts
//////////////////////////////
export interface CustomTextSchema
  extends ChildrenSchema,
    CssSchema,
    SlugSchema,
    FontSchema {
  // font family
  isKhand?: boolean;

  // color
  isHeaderColor?: boolean;
  isLinkColor?: boolean;
  isTitleColor?: boolean;

  // font size
  isMainTitle?: boolean;
  isTitle?: boolean;
  isSubTitle?: boolean;
  isHeading?: boolean;
  isSubHeading?: boolean;
  isLarge?: boolean;
  isBody?: boolean;
  isParagraph?: boolean;
  isSlightPara?: boolean;
  isSpan?: boolean;
  isSmall?: boolean;

  // font weight
  isNormal?: boolean;
  isMedium?: boolean;
  isSemiBold?: boolean;
  isBold?: boolean;
  isExtraBold?: boolean;
}

//////////////////////////////
// Functions
//////////////////////////////
export type HandleActionSchema = {
  handleAction: () => void;
};

// Title and Image
export interface LinkImageSchema extends LinkSchema, ImagesSchema {}
