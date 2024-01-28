//////////////////////////////
// Default fonts

import { Khand, Mukta } from "next/font/google";

//////////////////////////////
export const khand = Khand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-khand",
});

export const mukta = Mukta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mukta",
});

//////////////////////////////
// Navbar font
//////////////////////////////
export const navbar = "text-xl font-semibold";

//////////////////////////////
// Footer
//////////////////////////////
export const xl_bold = "text-xl font-bold";

//////////////////////////////
// Font sizes
//////////////////////////////
export const main_title = "text-6xl",
  main_title_bold = "text-6xl font-bold",
  title = "text-5xl",
  title_bold = "text-5xl font-bold",
  sub_title = "text-4xl",
  sub_title_bold = "text-4xl font-bold",
  heading = "text-3xl",
  heading_bold = "text-3xl font-bold",
  sub_heading = "text-2xl",
  sub_heading_bold = "text-2xl font-bold",
  large = "text-xl",
  large_bold = "text-xl font-bold",
  body = "text-lg",
  body_bold = "text-lg font-bold",
  paragraph = "text-md",
  paragraph_bold = "text-md font-bold",
  slight_para = "text-[18px]",
  slight_para_bold = "text-[18px] font-bold",
  span = "text-sm",
  span_bold = "text-sm font-bold",
  small = "text-xs",
  small_bold = "text-xs font-bold";

//////////////////////////////
// Line Heights
//////////////////////////////
export const main_title_line_height = "leading-[56px]",
  title_line_height = "leading-[48px]",
  sub_title_line_height = "leading-[40px]",
  heading_line_height = "leading-[32px]",
  sub_heading_line_height = "leading-[24px]",
  large_line_height = "leading-[16px]",
  body_line_height = "leading-[12px]",
  paragraph_line_height = "leading-[8px]",
  span_line_height = "leading-[4px]",
  small_line_height = "leading-[0]";

// title
// sub_title
// heading
// sub_heading
