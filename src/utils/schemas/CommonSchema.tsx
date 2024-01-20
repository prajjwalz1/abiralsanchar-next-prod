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
  onClick: () => void;
};
