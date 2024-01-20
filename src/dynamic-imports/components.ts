import dynamic from "next/dynamic";

//////////////////////////////
// buttons = helpers/components/buttons
//////////////////////////////
export const CloseButton = dynamic(
  () => import("@/helpers/components/buttons/CloseButton"),
  { ssr: false }
);

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
