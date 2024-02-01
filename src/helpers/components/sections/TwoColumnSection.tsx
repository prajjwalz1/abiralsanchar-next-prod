import {
  BannerImage,
  CustomText,
  DescriptionCard,
  MediaCard,
} from "@/dynamic-imports/components";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import {
  MediaCardSchema,
  TwoColumnSectionSchema,
} from "@/utils/schemas/ComponentsSchema";

export default function TwoColumnSection(props: TwoColumnSectionSchema) {
  // Props
  const { bannerImg, descProps, title, newsChildren, highlightChildren } =
    props;

  return (
    <>
      <BannerImage imageProps={bannerImg} />

      <div className="pb-5 grid grid-cols-[1fr_280px] gap-6">
        <div className="flex flex-col first-of-type:gap-0 gap-6">
          <CustomText isHeaderColor isTitle isKhand isExtraBold>
            {title}
          </CustomText>

          <DescriptionCard {...descProps} />

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {newsChildren?.map((item: MediaCardSchema, idx: number) => (
              <MediaCard key={getUniqueKey(idx, item.title!)} {...item} />
            ))}
          </div>
        </div>
        <div className="h-full flex flex-col justify-between pt-5 gap-4">
          {highlightChildren}
        </div>
      </div>
    </>
  );
}
