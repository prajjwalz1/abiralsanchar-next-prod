"use client";

import { divider } from "@/assets/colors";
import { padding_x } from "@/assets/css/styles";
import { HeroArticleSection } from "@/dynamic-imports/components";
// Assets

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { testArticle } from "@/utils/data/backend_data";

export default function Home() {
  // Variables
  return (
    <ReduxProvider>
      <div className={`${padding_x} ${divider} divide-y`}>
        <HeroArticleSection {...testArticle} />
      </div>
    </ReduxProvider>
  );
}
