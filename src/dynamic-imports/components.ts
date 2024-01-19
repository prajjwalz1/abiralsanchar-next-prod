import dynamic from "next/dynamic";

//////////////////////////////
// images = helpers/components/images
//////////////////////////////
export const Logo = dynamic(() => import("@/helpers/components/images/Logo"), {
  ssr: false,
});

//////////////////////////////
// layouts = helpers/components/layouts
//////////////////////////////
export const RootHeader = dynamic(
  () => import("@/helpers/components/layouts/root/Header"),
  { ssr: false }
);

export const RootFooter = dynamic(
  () => import("@/helpers/components/layouts/root/Footer"),
  { ssr: false }
);
