import { Khand } from "next/font/google";
import * as colors from "@/assets/colors";

//////////////////////////////
// Base css
//////////////////////////////
export const paddingX = "px-8 md:px-16 lg:px-32";

//////////////////////////////
// Root layout css
//////////////////////////////
const khand = Khand({ weight: "400", subsets: ["latin"] });
export const rootLayoutCss = {
  parent: {
    fontFamily: khand.style.fontFamily,
  },
};

// Active links
export const getActiveLink = (isFlag: boolean, color?: string) =>
  isFlag ? color ?? colors.active_link : "text-white";
