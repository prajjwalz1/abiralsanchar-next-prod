import dynamic from "next/dynamic";

//////////////////////////////
// buttons
//////////////////////////////
export const Button = dynamic(
  () => import("@/helpers/components/buttons/Button"),
  { ssr: false }
);
export const CloseButton = dynamic(
  () => import("@/helpers/components/buttons/CloseButton"),
  { ssr: false }
);

//////////////////////////////
// cards
//////////////////////////////
export const DescriptionCard = dynamic(
  () => import("@/helpers/components/cards/DescriptionCard"),
  { ssr: false }
);
export const MediaCard = dynamic(
  () => import("@/helpers/components/cards/MediaCard"),
  { ssr: false }
);
export const TimeCard = dynamic(
  () => import("@/helpers/components/cards/TimeCard"),
  { ssr: false }
);

//////////////////////////////
// containers
//////////////////////////////
export const CenterContainer = dynamic(
  () => import("@/helpers/components/containers/CenterContainer"),
  { ssr: false }
);

//////////////////////////////
// Images
//////////////////////////////
export const BannerImage = dynamic(
  () => import("@/helpers/components/images/BannerImage"),
  {
    ssr: false,
  }
);
export const CustomImage = dynamic(
  () => import("@/helpers/components/images/CustomImage"),
  {
    ssr: false,
  }
);
export const LogoImage = dynamic(
  () => import("@/helpers/components/images/LogoImage"),
  {
    ssr: false,
  }
);
export const PosterImage = dynamic(
  () => import("@/helpers/components/images/PosterImage"),
  {
    ssr: false,
  }
);

//////////////////////////////
// others
//////////////////////////////
export const BodyOverlay = dynamic(
  () => import("@/helpers/components/others/BodyOverlay"),
  {
    ssr: false,
  }
);
export const Divider = dynamic(
  () => import("@/helpers/components/others/Divider"),
  {
    ssr: false,
  }
);

//////////////////////////////
// sections
//////////////////////////////
export const AdsSection = dynamic(
  () => import("@/helpers/components/sections/AdsSection"),
  {
    ssr: false,
  }
);
export const BoardSection = dynamic(
  () => import("@/helpers/components/sections/BoardSection"),
  {
    ssr: false,
  }
);
export const NewsCategorySection = dynamic(
  () => import("@/helpers/components/sections/NewsCategorySection"),
  { ssr: false }
);
export const ThreeColumnSection = dynamic(
  () => import("@/helpers/components/sections/ThreeColumnSection"),
  { ssr: false }
);
export const MiniUpdatesSection = dynamic(
  () => import("@/helpers/components/sections/MiniUpdatesSection"),
  { ssr: false }
);

//////////////////////////////
// sections/main
//////////////////////////////
export const NewsCategoriesSection = dynamic(
  () => import("@/helpers/components/sections/main/NewsCategoriesSection"),
  { ssr: false }
);
export const FeaturedSection = dynamic(
  () => import("@/helpers/components/sections/main/FeaturedSection"),
  { ssr: false }
);
export const HighlightSection = dynamic(
  () => import("@/helpers/components/sections/main/HighlightSection"),
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
export const HeroArticleSection = dynamic(
  () => import("@/helpers/components/sections/HeroArticleSection"),
  { ssr: false }
);
