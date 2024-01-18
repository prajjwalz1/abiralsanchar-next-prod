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
