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

      <div className="relative w-full py-5 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[360px_1fr_280px] gap-6">
        <PosterImage {...posterImg} />

        <MiniUpdatesSection title={title} articles={articles} />

        <AdsSection imgList={imgList} />
      </div>
    </>
  );
}
