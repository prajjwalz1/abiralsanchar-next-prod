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
export const CustomImage = dynamic(
  () => import("@/helpers/components/images/CustomImage"),
  {
    ssr: false,
  }
);

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

//////////////////////////////
// Header
//////////////////////////////
export const RootHeader = dynamic(
  () => import("@/helpers/components/layouts/root/Header"),
  { ssr: false }
);

// FeaturedHighlights
export const FeaturedHighlights = dynamic(
  () => import("@/helpers/components/layouts/root/_comps/FeaturedHighlights"),
  { ssr: false }
);

// LogoSection
export const LogoSection = dynamic(
  () => import("@/helpers/components/layouts/root/_comps/LogoSection"),
  { ssr: false }
);

// Navbar
export const Navbar = dynamic(
  () => import("@/helpers/components/layouts/root/_comps/Navbar"),
  { ssr: false }
);

//////////////////////////////
// Footer
//////////////////////////////
export const RootFooter = dynamic(
  () => import("@/helpers/components/layouts/root/Footer"),
  { ssr: false }
);

//////////////////////////////
// tags
//////////////////////////////
export const CustomTag = dynamic(
  () => import("@/helpers/components/tags/CustomTag"),
  { ssr: false }
);

//////////////////////////////
// texts
//////////////////////////////
export const CustomText = dynamic(
  () => import("@/helpers/components/texts/CustomText"),
  { ssr: false }
);

//////////////////////////////
// @/helpers/components-extras/home
//////////////////////////////
export const HeroArticle = dynamic(
  () => import("@/helpers/components-extras/home/HeroArticle"),
  { ssr: false }
);
