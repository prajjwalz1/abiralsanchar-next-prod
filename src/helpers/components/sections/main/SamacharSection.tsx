import {
  AdsSection,
  CommonMainSection,
  MediaCard,
} from "@/dynamic-imports/components";
import {
  ads_section,
  banners,
  samachar_children,
  samachar_desc,
} from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { MediaCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function SamacharSection() {
  // Variables
  const title = "समाचार";
  const bannerImg = banners.samachar_section;
  const descProps = samachar_desc;
  const newsChildren = (
    <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {samachar_children.map((item: MediaCardSchema, idx: number) => (
        <MediaCard key={getUniqueKey(idx, item.title!)} {...item} />
      ))}
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
