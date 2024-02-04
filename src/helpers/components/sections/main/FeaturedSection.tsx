"use client";

import { BannerImage, HeroArticleSection } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { banners } from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";

export default function ThreeColumnSection() {
  // Redux
  const { featured_data } = useAppSelector(
    (state: RootState) => state.NewsPortal.header.featured
  );

  return (
    <>
      <BannerImage imageProps={banners.featured_section} extendCss="mt-3" />
      {featured_data?.slice(0, 3)?.map((item: ArticleSchema, idx: number) => (
        <HeroArticleSection
          key={getUniqueKey(idx, item?.title ?? "Hero Article")}
          {...item}
        />
      ))}
    </>
  );
}
