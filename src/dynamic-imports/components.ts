import dynamic from "next/dynamic";

//////////////////////////////
// images = helpers/components/images
//////////////////////////////
export const Logo = dynamic(() => import("../helpers/components/images/Logo"));

//////////////////////////////
// layouts = helpers/components/layouts
//////////////////////////////
export const RootHeader = dynamic(
  () => import("../helpers/components/layouts/root/Header")
);

export const RootFooter = dynamic(
  () => import("../helpers/components/layouts/root/Footer")
);
