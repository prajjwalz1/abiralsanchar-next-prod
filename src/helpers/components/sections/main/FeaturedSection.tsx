import { BannerImage, HeroArticleSection } from "@/dynamic-imports/components";
import { banners } from "@/utils/constants/homepage-constants";

export default function FeaturedSection() {
  return (
    <>
      <BannerImage imageProps={banners.hero_section} />
      <HeroArticleSection />
      <HeroArticleSection />
      <HeroArticleSection />
    </>
  );
}
