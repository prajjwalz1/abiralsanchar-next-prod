//////////////////////////////
// Default fonts

import { FontSizeSchema, FontWeightSchema } from "@/utils/schemas/CommonSchema";
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
export const main_title = "text-[26px] xs:text-[29px] sm:text-[32px]",
  title = "text-[24px] xs:text-[27px] sm:text-[30px]",
  sub_title = "text-[22px] xs:text-[25px] sm:text-[28px]",
  heading = "text-[20px] xs:text-[23px] sm:text-[26px]",
  sub_heading = "text-[18px] xs:text-[21px] sm:text-[24px]",
  large = "text-[16px] xs:text-[19px] sm:text-[22px]",
  body = "text-[14px] xs:text-[17px] sm:text-[20px]",
  paragraph = "text-[12px] xs:text-[15px] sm:text-[18px]",
  slight_para = "text-[10px] xs:text-[13px] sm:text-[16px]",
  span = "text-[9px] xs:text-sm",
  small = "text-[8px] xs:text-xs";

export const getFont = (size: FontSizeSchema, weight?: FontWeightSchema) => {
  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semi_bold: "font-semi-bold",
    bold: "font-bold",
    extra_bold: "font-extrabold",
  };

  const getSize = (key: FontSizeSchema) =>
    ((
      {
        main_title,
        title,
        sub_title,
        heading,
        sub_heading,
        large,
        body,
        paragraph,
        slight_para,
        span,
        small,
      } as const
    )[key]);

  return `${getSize(size)} ${weights[weight ?? "medium"]}`;
};
//////////////////////////////
// Line Heights
//////////////////////////////
export const main_title_line_height = "leading-[56px]",
  title_line_height = "leading-[48px]",
  sub_title_line_height = "leading-[40px]",
  heading_line_height = "leading-[32px]",
  sub_heading_line_height = "leading-[24px]",
  slight_large_line_height = "leading-[20px]",
  large_line_height = "leading-[16px]",
  body_line_height = "leading-[12px]",
  paragraph_line_height = "leading-[8px]",
  span_line_height = "leading-[4px]",
  small_line_height = "leading-[0]";

// title
// sub_title
// heading
// sub_heading
