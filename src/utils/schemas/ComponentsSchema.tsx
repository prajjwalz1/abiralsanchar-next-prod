import {
  CssSchema,
  FlagSchema,
  FontSchema,
  SlugSchema,
  TitleSchema,
} from "./CommonSchema";

export interface MediaCardSchema extends TitleSchema, SlugSchema {
  image1: string | null;
}

export interface TimeCardSchema
  extends CssSchema,
    TitleSchema,
    FontSchema,
    FlagSchema {}
