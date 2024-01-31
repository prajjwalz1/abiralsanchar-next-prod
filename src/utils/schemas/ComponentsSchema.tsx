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
  TimeSchema,
  TitleFontSchema,
  TitleLineClampSchema,
  TitleSchema,
  CustomImageSchema,
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
  extends TimeSchema,
    InfoPlacingSchema,
    TitleSchema,
    TitleLineClampSchema,
    SlugSchema {
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
export interface PosterImageSchema extends TitleSchema, TimeSchema {
  tag?: string;
  titleFont?: string;
  timeFont?: string;
  isTransparent?: boolean;
  isZoomable?: boolean;
}

// sections
export interface CommonMainSectionSchema extends TitleSchema {
  bannerImg: CustomImageSchema;
  descProps: DescriptionCardSchema;
  newsChildren: ReactNode;
  highlightChildren: ReactNode;
}
