"use client";

import { divider } from "@/assets/colors";
import { padding_x, rGap } from "@/assets/css/styles";
import {
  DidYouLeaveSection,
  HeroArticleSection,
  SimilarNewsSection,
} from "@/dynamic-imports/components";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { testArticle } from "@/utils/data/backend_data";

export default function Home() {
  // Variables
  return (
    <ReduxProvider>
      <div
        className={`${padding_x} ${divider} flex flex-col ${rGap} divide-y pb-10 md:pb:0`}
      >
        <HeroArticleSection {...testArticle} isFlag />
        <SimilarNewsSection />
        <DidYouLeaveSection />
      </div>
    </ReduxProvider>
  );
}
