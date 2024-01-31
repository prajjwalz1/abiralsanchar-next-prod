import {
  AdsSection,
  BannerImage,
  CommonMainSection,
  MediaCard,
} from "@/dynamic-imports/components";
import {
  ads_section,
  banners,
  business_children_1,
  business_children_2,
  samachar_desc,
} from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { MediaCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function BusinessSection() {
  // Variables
  const title = "विजनेस";
  const bannerImg = banners.business_section[0];
  const descProps = samachar_desc;
  const newsChildren = (
    <div className="bg-green-300">
      <BannerImage imageProps={banners.business_section[1]} css="" />
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {business_children_1.map((item: MediaCardSchema, idx: number) => (
          <MediaCard key={getUniqueKey(idx, item.title!)} {...item} />
        ))}
      </div>

      <BannerImage imageProps={banners.business_section[2]} css="" />
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {business_children_2.map((item: MediaCardSchema, idx: number) => (
          <MediaCard key={getUniqueKey(idx, item.title!)} {...item} />
        ))}
      </div>
    </div>
  );
  const highlightChildren = <AdsSection imgList={ads_section.news} />;

  // Custom Props
  const samacharProps = {
    title,
    bannerImg,
    descProps,
    newsChildren,
    highlightChildren,
  };

  return <CommonMainSection {...samacharProps} />;
}
