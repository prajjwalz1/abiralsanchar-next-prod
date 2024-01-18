import dynamic from "next/dynamic";

//////////////////////////////
// layouts = helpers/components/layouts
//////////////////////////////
export const RootHeader = dynamic(
  () => import("../helpers/components/layouts/root/Header")
);

export const RootFooter = dynamic(
  () => import("../helpers/components/layouts/root/Footer")
);
