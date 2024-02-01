"use client";

// Assets
import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";

import {
  CategoriesSection,
  FeaturedSection,
  HighlightSection,
} from "@/dynamic-imports/components";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";

export default function Home() {
  return (
    <ReduxProvider>
      <div className={`${styles.padding_x} ${colors.divider} divide-y`}>
        <FeaturedSection />
        <HighlightSection />
        <CategoriesSection />
      </div>
    </ReduxProvider>
  );
}
