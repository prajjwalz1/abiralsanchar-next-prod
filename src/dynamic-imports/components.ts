import dynamic from "next/dynamic";

//////////////////////////////
// Buttons
//////////////////////////////
export const CloseButton = dynamic(
  () => import("@/helpers/components/buttons/CloseButton"),
  { ssr: false }
);

//////////////////////////////
// cards
//////////////////////////////
export const MediaCard = dynamic(
  () => import("@/helpers/components/cards/MediaCard"),
  { ssr: false }
);
export const TimeCard = dynamic(
  () => import("@/helpers/components/cards/TimeCard"),
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
export const PosterImage = dynamic(
  () => import("@/helpers/components/images/PosterImage"),
  {
    ssr: false,
  }
);

//////////////////////////////
// Sections
//////////////////////////////
export const BannerSection = dynamic(
  () => import("@/helpers/components/sections/BannerSection"),
  {
    ssr: false,
  }
);
export const BodyOverlaySection = dynamic(
  () => import("@/helpers/components/sections/BodyOverlaySection"),
  {
    ssr: false,
  }
);
export const DividerSection = dynamic(
  () => import("@/helpers/components/sections/DividerSection"),
  {
    ssr: false,
  }
);
export const HighlightSection = dynamic(
  () => import("@/helpers/components/sections/HighlightSection"),
  { ssr: false }
);
export const MiniUpdatesSection = dynamic(
  () => import("@/helpers/components/sections/MiniUpdatesSection"),
  { ssr: false }
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

// RootLayoutLogo
export const RootLayoutLogo = dynamic(
  () => import("@/helpers/components/layouts/root/_comps/RootLayoutLogo"),
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
