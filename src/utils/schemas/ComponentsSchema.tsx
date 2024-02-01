import { ReactNode } from "react";
import {
  ButtonTypeSchema,
  ChildrenSchema,
  ColorSchema,
  CssSchema,
  DescriptionSchema,
  InfoPlacingSchema,
  FlagSchema,
  FontSchema,
  OnClickSchema,
  SlugSchema,
  TitleFontSchema,
  TitleLineClampSchema,
  TitleSchema,
  BannerImgSchema,
  ImageArrSchema,
  AllArticlesSchema,
  UpdatedAtSchema,
  Image1Schema,
} from "./CommonSchema";
import { ArticleSchema } from "./ApiSchema";

//////////////////////////////
// buttons
//////////////////////////////
export interface ButtonSchema
  extends ButtonTypeSchema,
    TitleFontSchema,
    CssSchema,
    OnClickSchema {
  color?: string;
  isClock?: boolean;
}

//////////////////////////////
// cards
//////////////////////////////
export interface MediaCardSchema
  extends Image1Schema,
    InfoPlacingSchema,
    TitleSchema,
    TitleLineClampSchema,
    SlugSchema,
    UpdatedAtSchema {}

export interface DescriptionCardSchema
  extends ColorSchema,
    MediaCardSchema,
    DescriptionSchema {}

export interface TimeCardSchema
  extends CssSchema,
    TitleSchema,
    FontSchema,
    ColorSchema,
    FlagSchema {}

export interface BodyOverlaySchema extends ChildrenSchema, CssSchema {}

//////////////////////////////
// images
//////////////////////////////
export interface PosterImageSchema extends ArticleSchema {
  tag?: string;
  titleFont?: string;
  timeFont?: string;
  isTransparent?: boolean;
  isZoomable?: boolean;
}

// sections
export interface SingleNewsCategorySectionSchema
  extends TitleSchema,
    BannerImgSchema {
  descProps: DescriptionCardSchema;
  newsChildren: MediaCardSchema[];
  highlightChildren: ReactNode;
}

export interface ThreeColumnSectionSchema
  extends TitleSchema,
    BannerImgSchema,
    ImageArrSchema,
    AllArticlesSchema {
  posterImg: PosterImageSchema;
}

export interface MiniUpdatesSectionSchema
  extends AllArticlesSchema,
    TitleSchema {}
