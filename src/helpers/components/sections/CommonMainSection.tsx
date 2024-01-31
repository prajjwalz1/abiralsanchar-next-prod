import {
  BannerImage,
  CustomText,
  DescriptionCard,
} from "@/dynamic-imports/components";
import { CommonMainSectionSchema } from "@/utils/schemas/ComponentsSchema";

export default function CommonMainSection(props: CommonMainSectionSchema) {
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

          {newsChildren}
        </div>
        <div className="h-full flex flex-col justify-between pt-5 gap-4">
          {highlightChildren}
        </div>
      </div>
    </>
  );
}
