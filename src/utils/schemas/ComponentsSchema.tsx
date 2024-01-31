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
  extends MediaCardSchema,
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
