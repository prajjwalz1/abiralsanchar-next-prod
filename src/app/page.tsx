"use client";
// import { Metadata } from "next";
// import { RootLayoutMetadata } from "@/utils/seo/metadatas";

import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";
import { bank_gif, homepage_banner_jpeg } from "@/assets/images";
import { BannerSection } from "@/dynamic-imports/components";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import HeroArticle from "@/helpers/components-extras/home/HeroArticle";

export default function Home() {
  return (
    <ReduxProvider>
      <div className={`${styles.padding_x} ${colors.divider} divide-y`}>
        {/* Banner section */}
        <BannerSection
          imageProps={{
            src: homepage_banner_jpeg.src,
            alt: "homepage_banner_jpeg",
            width: 100,
            height: 100,
          }}
        />

        {/* Hero section */}
        <HeroArticle />
        <HeroArticle />
        <HeroArticle />

        {/* Banner section */}
        <BannerSection
          imageProps={{
            src: bank_gif,
            alt: "homepage_banner_jpeg",
            width: 100,
            height: 100,
          }}
        />
      </div>
    </ReduxProvider>
  );
}
