import {
  AdsSection,
  BannerImage,
  MiniUpdatesSection,
  PosterImage,
} from "@/dynamic-imports/components";
import { CommonMainSectionOneSchema } from "@/utils/schemas/ComponentsSchema";

export default function CommonMainSectionOne(
  props: CommonMainSectionOneSchema
) {
  // Props
  const { bannerImg, posterImg, imgList } = props;

  return (
    <>
      <BannerImage imageProps={bannerImg} />

      <div className="relative w-full py-5 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[360px_1fr_280px] gap-6">
        <PosterImage {...posterImg} />

        <MiniUpdatesSection />

        <AdsSection imgList={imgList} />
      </div>
    </>
  );
}
