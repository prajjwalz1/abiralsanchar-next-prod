"use client";

import { BannerImage, HeroArticleSection } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { banners } from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";

export default function FeaturedSection() {
  // Redux
  const { featured_data } = useAppSelector(
    (state: RootState) => state.NewsPortal.header.featured
  );

  return (
    <>
      <BannerImage imageProps={banners.hero_section} />
      {featured_data?.map((item: ArticleSchema, idx: number) => (
        <HeroArticleSection
          key={getUniqueKey(idx, item?.title ?? "H")}
          {...item}
        />
      ))}
    </>
  );
}
