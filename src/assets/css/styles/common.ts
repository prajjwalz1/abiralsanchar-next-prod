import { Khand } from "next/font/google";

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
  isFlag && !color ? "text-blue-500" : isFlag && color ? color : "";
