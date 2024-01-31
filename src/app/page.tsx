"use client";
import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";
import { BannerSection, HighlightSection } from "@/dynamic-imports/components";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import HeroArticle from "@/helpers/components-extras/home/HeroArticle";
import { banners } from "@/utils/constants/homepage-constants";

export default function Home() {
  return (
    <ReduxProvider>
      <div className={`${styles.padding_x} ${colors.divider} divide-y`}>
        {/* Banner section */}
        <BannerSection imageProps={banners[0]} />

        {/* Hero section */}
        <HeroArticle />
        <HeroArticle />
        <HeroArticle />

        {/* Banner section */}
        <BannerSection imageProps={banners[1]} />

        <HighlightSection />
      </div>
    </ReduxProvider>
  );
}
