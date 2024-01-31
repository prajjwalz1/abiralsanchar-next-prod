import {
  AdsSection,
  BannerImage,
  BoardSection,
  CommonMainSection,
  MediaCard,
} from "@/dynamic-imports/components";
import {
  ads_section,
  banners,
  business_children_1,
  business_children_2,
  business_desc,
} from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { MediaCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function BusinessSection() {
  // Variables
  const title = "विजनेस";
  const bannerImg = banners.business_section[0];
  const descProps = business_desc;
  const bannerCss = { css: "pt-6 rounded-md" };

  const newsChildren = (
    <div className="">
      <BannerImage imageProps={banners.business_section[1]} {...bannerCss} />
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {business_children_1.map((item: MediaCardSchema, idx: number) => (
          <MediaCard key={getUniqueKey(idx, item.title!)} {...item} />
        ))}
      </div>

      <BannerImage imageProps={banners.business_section[2]} {...bannerCss} />
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {business_children_2.map((item: MediaCardSchema, idx: number) => (
          <MediaCard key={getUniqueKey(idx, item.title!)} {...item} />
        ))}
      </div>
    </div>
  );

  const highlightChildren = <BoardSection />;

  // Custom Props
  const businessProps = {
    title,
    bannerImg,
    descProps,
    newsChildren,
    highlightChildren,
  };

  return <CommonMainSection {...businessProps} />;
}
