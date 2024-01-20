import { Khand } from "next/font/google";
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";

//////////////////////////////
// Base css
//////////////////////////////
export const padding_x = "px-8 md:px-16 lg:px-32";
export const padding_xl = "pl-8 md:pl-16 lg:pl-32";
export const padding_xr = "pr-8 md:pr-16 lg:pr-32";
export const padding_y = "py-8 md:py-16 lg:py-32";
export const logo_padding_y = "py-4";
export const margin_x = "mx-8 md:mx-16 lg:mx-32";

//////////////////////////////
// Root layout css
//////////////////////////////
const khand = Khand({ weight: "400", subsets: ["latin"] });
export const root_layout_css = {
  parent: {
    fontFamily: khand.style.fontFamily,
  },
};

//////////////////////////////
// Active links
//////////////////////////////
export const getActiveLink = (
  isSameLink: boolean,
  color?: string,
  isFlag?: boolean
) =>
  isSameLink
    ? color ?? colors.active_link
    : isFlag
    ? colors.medium_black
    : colors.white;

//////////////////////////////
// Icons
//////////////////////////////
export const nav_icon = `w-8 h-8 ${colors.icon}`;

//////////////////////////////
// Footer
//////////////////////////////
export const footer_menu_title = `${fonts.xl_bold} ${colors.header}`;
export const footer_menu_para = `${colors.hover_link}`;

// Buttons
export const close_button = `absolute top-6 right-6 ${colors.danger_icon_button}`;
