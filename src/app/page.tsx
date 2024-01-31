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
        <BannerSection imageProps={banners[0]} />

        <HeroArticle />
        <HeroArticle />
        <HeroArticle />

        <BannerSection imageProps={banners[1]} />

        <HighlightSection />

        <BannerSection imageProps={banners[2]} />
      </div>
    </ReduxProvider>
  );
}
