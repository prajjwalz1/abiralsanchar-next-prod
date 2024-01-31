import {
  AdsSection,
  MiniUpdatesSection,
  PosterImage,
} from "@/dynamic-imports/components";
import { adsSection } from "@/utils/constants/homepage-constants";

export default function HighlightSection() {
  return (
    <div className="relative w-full py-5 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[360px_1fr_280px] gap-6">
      <PosterImage
        title="गोरहा र बालापन"
        time="४९ मिनेट अगाडि"
        isTransparent
        isZoomable
      />

      <MiniUpdatesSection />

      <AdsSection imgList={adsSection.highlights} />
    </div>
  );
}
