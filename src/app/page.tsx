"use client";
import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";
import {
  BannerImage,
  BusinessSection,
  HeroSection,
  HighlightSection,
  SamacharSection,
} from "@/dynamic-imports/components";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { banners } from "@/utils/constants/homepage-constants";

export default function Home() {
  return (
    <ReduxProvider>
      <div className={`${styles.padding_x} ${colors.divider} divide-y`}>
        <BannerImage imageProps={banners[0]} />
        <HeroSection />

        <BannerImage imageProps={banners[1]} />
        <HighlightSection />

        <BannerImage imageProps={banners[2]} />
        <SamacharSection />

        <BannerImage imageProps={banners[3]} />
        <BusinessSection />
      </div>
    </ReduxProvider>
  );
}
