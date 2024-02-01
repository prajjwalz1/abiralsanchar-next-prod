import {
  AdsSection,
  BannerImage,
  CustomText,
  DescriptionCard,
  MediaCard,
} from "@/dynamic-imports/components";
import { ads_section, banners } from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleCategorizedSchema } from "@/utils/schemas/ApiSchema";
import { MediaCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function NewsCategorySection(props: ArticleCategorizedSchema) {
  // Props
  const { category_title, articles } = props;

  return (
    <>
      <BannerImage imageProps={banners.samachar_section} />

      <div className="pb-5 grid grid-cols-[1fr_280px] gap-6">
        <div className="flex flex-col first-of-type:gap-0 gap-6">
          <CustomText isHeaderColor isTitle isKhand isExtraBold>
            {category_title}
          </CustomText>

          <DescriptionCard {...articles[0]} />

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {articles?.map((item: MediaCardSchema, idx: number) => (
              <MediaCard
                key={getUniqueKey(idx, item.title!)}
                {...item}
                info_placing="justify-center"
              />
            ))}
          </div>
        </div>
        <div className="h-full flex flex-col justify-between pt-5 gap-4">
          <AdsSection imgList={ads_section.news} />
        </div>
      </div>
    </>
  );
}
