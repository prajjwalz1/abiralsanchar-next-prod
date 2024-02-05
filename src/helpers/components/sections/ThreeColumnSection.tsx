import {
  AdsSection,
  BannerImage,
  MiniUpdatesSection,
  PosterImage,
} from "@/dynamic-imports/components";
import { ThreeColumnSectionSchema } from "@/utils/schemas/ComponentsSchema";

export default function ThreeColumnSection(props: ThreeColumnSectionSchema) {
  // Props
  const { title, bannerImg, posterImg, articles, imgList } = props;

  return (
    <>
      <BannerImage imageProps={bannerImg} />

      <div className="relative w-full pt-3 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[360px_1fr_280px] gap-3 md:gap-5">
        <PosterImage {...posterImg} />

        <MiniUpdatesSection title={title} articles={articles} />

        <AdsSection imgList={imgList} />
      </div>
    </>
  );
}
