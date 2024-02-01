import { AdsSection, TwoColumnSection } from "@/dynamic-imports/components";
import {
  ads_section,
  banners,
  samachar_children,
  samachar_desc,
} from "@/utils/constants/homepage-constants";

export default function SamacharSection() {
  // Variables
  const title = "समाचार";
  const bannerImg = banners.samachar_section;
  const descProps = samachar_desc;

  const newsChildren = samachar_children;

  const highlightChildren = <AdsSection imgList={ads_section.news} />;

  // Custom Props
  const samacharProps = {
    title,
    bannerImg,
    descProps,
    newsChildren,
    highlightChildren,
  };

  return <TwoColumnSection {...samacharProps} />;
}
