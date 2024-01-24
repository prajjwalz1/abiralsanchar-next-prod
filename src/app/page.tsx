"use client";
// import { Metadata } from "next";
// import { RootLayoutMetadata } from "@/utils/seo/metadatas";

import * as styles from "@/assets/css/styles";
import { homepage_banner_jpeg } from "@/assets/images";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import HeroArticle from "@/helpers/components-extras/home/HeroArticle";
import CustomImage from "@/helpers/components/images/CustomImage";

export default function Home() {
  return (
    <ReduxProvider>
      <div className={`${styles.padding_x} divide-y divide-gray-200`}>
        {/* Banner section */}
        <div className="banner-section py-5">
          <CustomImage
            src={homepage_banner_jpeg.src}
            alt="homepage_banner_jpeg"
            width={100}
            height={100}
          />
        </div>

        {/* Hero section */}
        <HeroArticle />
      </div>
    </ReduxProvider>
  );
}
