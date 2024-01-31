import { CommonMainSectionOne } from "@/dynamic-imports/components";
import { ads_section, banners } from "@/utils/constants/homepage-constants";

export default function HighlightSection() {
  // Variables
  const bannerImg = banners.highlight_section;
  const posterImg = {
    title: "गोरहा र बालापन",
    time: "४९ मिनेट अगाडि",
    isTransparent: true,
    isZoomable: true,
  };
  const imgList = ads_section.highlights;

  // Custom props
  const highlightProps = { bannerImg, posterImg, imgList };

  return <CommonMainSectionOne {...highlightProps} />;
}
