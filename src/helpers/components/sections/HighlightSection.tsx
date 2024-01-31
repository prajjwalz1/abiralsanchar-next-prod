import { MiniUpdatesSection, PosterImage } from "@/dynamic-imports/components";
import CustomImage from "../images/CustomImage";
import { CustomImageSchema } from "@/utils/schemas/CommonSchema";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { highlightAds } from "@/utils/constants/homepage-constants";

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

      <div className="hidden lg:flex lg:flex-col lg:gap-4 lg:justify-between">
        {highlightAds.map((item: CustomImageSchema, idx: number) => (
          <CustomImage
            key={getUniqueKey(idx, item.alt)}
            {...item}
            divCss="w-full h-[155px] bg-red-300 rounded-md"
            imgCss="w-full h-full object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
