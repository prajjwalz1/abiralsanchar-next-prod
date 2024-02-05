"use client";

import { divider } from "@/assets/colors";
import { padding_x } from "@/assets/css/styles";
import {
  NewsCategoriesSection,
  FeaturedSection,
  HighlightSection,
} from "@/dynamic-imports/components";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";

export default function Home() {
  return (
    <ReduxProvider>
      <div
        className={`${padding_x} ${divider} w-full flex flex-col gap-3 md:gap-5 divide-y pb-10`}
      >
        <FeaturedSection />
        <HighlightSection />
        <NewsCategoriesSection />
      </div>
    </ReduxProvider>
  );
}
