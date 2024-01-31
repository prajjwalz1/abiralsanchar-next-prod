import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";

//////////////////////////////
// Base css
//////////////////////////////
export const width_x =
  "w-[calc(100%-80px)] max-w-[calc(100%-80px)] md:w-[calc(100%-256px)] md:max-w-[calc(100%-256px)] lg:w-[calc(100%-344px)] lg:max-w-[calc(100%-344px)]";
export const max_width_x =
  "max-w-[calc(100%-80px)] md:max-w-[calc(100%-256px)] lg:max-w-[calc(100%-344px)]";
export const padding_x = "px-10 md:px-32 lg:px-[172px]";
export const padding_x_medium = "px-5 md:px-10 lg:px-20";
export const padding_xl = "pl-10 md:pl-32 lg:pl-[172px]";
export const padding_xr = "pr-10 md:pr-32 lg:pr-[172px]";
export const padding_y = "py-10 md:py-32 lg:py-[172px]";
export const padding_y_medium = "py-5 md:py-10 lg:py-20";
export const padding_y_small = "py-3 md:py-6 lg:py-12";
export const logo_padding_y = "py-4";
export const margin_x = "mx-8 md:mx-16 lg:mx-32";

// Transitions
export const imgTransition = "transition ease-in-out duration-[900ms]";

//////////////////////////////
// Active links
//////////////////////////////
export const getActiveLink = (
  isSameLink: boolean,
  color?: string,
  isFlag?: boolean
) => {
  const active = isSameLink
    ? color ?? colors.active_link
    : isFlag
    ? colors.medium_black
    : colors.white;

  return `${colors.navbar_link} ${active} font-khand`;
};

//////////////////////////////
// Icons
//////////////////////////////
export const nav_icon = `w-8 h-8 ${colors.icon}`;


// Buttons
export const close_button = `absolute top-6 right-6 ${colors.danger_icon_button}`;
export const current_news_close_button = `text-2xl ${colors.danger_icon_button}`;
