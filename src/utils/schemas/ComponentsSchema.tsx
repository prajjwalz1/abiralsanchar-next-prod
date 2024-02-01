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
} from "./CommonSchema";

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
  extends InfoPlacingSchema,
    TitleSchema,
    TitleLineClampSchema,
    SlugSchema,
    UpdatedAtSchema {
  image1: string | null;
}

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
export interface PosterImageSchema extends TitleSchema, UpdatedAtSchema {
  tag?: string;
  image1?: string;
  titleFont?: string;
  timeFont?: string;
  isTransparent?: boolean;
  isZoomable?: boolean;
}

// sections
export interface TwoColumnSectionSchema extends TitleSchema, BannerImgSchema {
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
