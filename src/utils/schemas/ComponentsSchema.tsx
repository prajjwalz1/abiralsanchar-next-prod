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
  ShowClockSchema,
} from "./CommonSchema";
import { ArticleSchema } from "./ApiSchema";

//////////////////////////////
// buttons
//////////////////////////////
export interface ButtonSchema
  extends ButtonTypeSchema,
    TitleFontSchema,
    CssSchema,
    OnClickSchema,
    ShowClockSchema {
  color?: string;
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
    UpdatedAtSchema,
    ShowClockSchema,
    CssSchema {}

export interface DescriptionCardSchema
  extends ShowClockSchema,
    ColorSchema,
    MediaCardSchema,
    DescriptionSchema,
    Image1Schema {}

export interface TimeCardSchema
  extends CssSchema,
    TitleSchema,
    FontSchema,
    ColorSchema,
    FlagSchema {}

export interface BodyOverlaySchema extends ChildrenSchema, CssSchema {}

//////////////////////////////
// containers
//////////////////////////////
export interface ContainerSchema extends CssSchema, ChildrenSchema {}

//////////////////////////////
// images
//////////////////////////////

export interface MiniLogoImageSchema extends FlagSchema, OnClickSchema {}

export interface PosterImageSchema extends ArticleSchema {
  tag?: string;
  titleFont?: string;
  timeFont?: string;
  isTransparent?: boolean;
  isZoomable?: boolean;
}

// sections
export interface NewsCategorySectionSchema
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

// texts
export interface TextSchema extends CssSchema, ChildrenSchema {}

export interface NavbarTextSchema extends CssSchema, ChildrenSchema {
  isSameLink: boolean;
  isFlag?: boolean;
}
