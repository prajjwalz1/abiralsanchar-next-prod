import { ReactNode } from "react";

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

//////////////////////////////
// Links
//////////////////////////////
export interface LinkSchema extends IconSchema {
  label: string;
  href: string;
}

export interface NestedLinkSchema extends IconSchema {
  label: string;
  child: LinkSchema[];
}
