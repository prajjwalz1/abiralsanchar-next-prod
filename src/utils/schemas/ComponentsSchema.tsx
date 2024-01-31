import {
  ButtonTypeSchema,
  ChildrenSchema,
  ColorSchema,
  CssSchema,
  FlagSchema,
  FontSchema,
  OnClickSchema,
  SlugSchema,
  TitleFontSchema,
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
export interface MediaCardSchema extends TitleSchema, SlugSchema {
  image1: string | null;
}

export interface TimeCardSchema
  extends CssSchema,
    TitleSchema,
    FontSchema,
    ColorSchema,
    FlagSchema {}

export interface BodyOverlaySectionSchema extends ChildrenSchema, CssSchema {}
