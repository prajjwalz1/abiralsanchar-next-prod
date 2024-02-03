"use client";

// Assets
import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";

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
        className={`${styles.padding_x} ${colors.divider} w-full flex flex-col gap-5 divide-y`}
      >
        <FeaturedSection />
        <HighlightSection />
        <NewsCategoriesSection />
      </div>
    </ReduxProvider>
  );
}
