import dynamic from "next/dynamic";

//////////////////////////////
// Buttons
//////////////////////////////
export const CloseButton = dynamic(
  () => import("@/helpers/components/buttons/CloseButton"),
  { ssr: false }
);

//////////////////////////////
// Images
//////////////////////////////
export const Logo = dynamic(() => import("@/helpers/components/images/Logo"), {
  ssr: false,
});

//////////////////////////////
// Sections
//////////////////////////////
export const BodyOverlay = dynamic(
  () => import("@/helpers/components/sections/BodyOverlay"),
  {
    ssr: false,
  }
);

//////////////////////////////
// Layouts
//////////////////////////////
export const RootHeader = dynamic(
  () => import("@/helpers/components/layouts/root/Header"),
  { ssr: false }
);

export const RootFooter = dynamic(
  () => import("@/helpers/components/layouts/root/Footer"),
  { ssr: false }
);
