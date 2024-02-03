import {
  AdsSection,
  BannerImage,
  CenterContainer,
  CustomText,
  DescriptionCard,
  MediaCard,
} from "@/dynamic-imports/components";
import { ads_section, banners } from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import {
  ArticleCategorizedSchema,
  ArticleSchema,
} from "@/utils/schemas/ApiSchema";
import { MediaCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function NewsCategorySection(props: ArticleCategorizedSchema) {
  // Props
  const { category_title, articles } = props;

  // Vriables
  const isNoArticles = articles?.length < 1;
  const css = (articles: ArticleSchema[]) =>
    articles.length > 2 ? "items-end" : "items-start";
  const articles1 = articles?.slice(0, 3);
  const articles2 = articles?.slice(3, 6);
  const a1Css = css(articles1);
  const a2Css = css(articles2);

  return (
    <>
      <BannerImage imageProps={banners.samachar_section} />

      <div className="pb-5 grid md:grid-cols-[auto_280px] gap-3">
        {/* First column */}
        <div className="flex flex-col first-of-type:gap-0 gap-3">
          <CustomText
            css="leading-[72px]"
            isHeaderColor
            isTitle
            isKhand
            isExtraBold
          >
            {category_title}
          </CustomText>

          <DescriptionCard {...articles[0]} />

          {isNoArticles ? (
            <CenterContainer css="mt-5 w-full h-auto md:h-[calc(100%-260px-72px-22px)] grid place-items-center bg-white rounded-md shadow-md border-[1px] border-gray-200 p-8 md:p-0">
              <CustomText>Currently there are no articles to show</CustomText>
            </CenterContainer>
          ) : (
            <div className="h-auto md:h-[calc(100%-260px-72px)] max-h-[calc(100%-260px-72px)] flex flex-col sm:flex-row gap-3">
              <div
                className={`${a1Css} basis-1/2 pt-4 md:pt-3 grid grid-rows-3 gap-3 items-end`}
              >
                {articles1?.map((item: MediaCardSchema, idx: number) => (
                  <MediaCard
                    {...item}
                    key={getUniqueKey(idx, item.title!)}
                    css="h-[104px]"
                    info_placing="justify-center"
                  />
                ))}
              </div>
              <div
                className={`${a2Css} basis-1/2 md:pt-3 grid grid-rows-3 gap-3 items-end`}
              >
                {articles2?.map((item: MediaCardSchema, idx: number) => (
                  <MediaCard
                    {...item}
                    key={getUniqueKey(idx, item.title!)}
                    css="h-[104px]"
                    info_placing="justify-center"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Second column */}
        <div className="h-full flex flex-col justify-between pt-5 gap-4">
          <AdsSection imgList={ads_section.news} />
        </div>
      </div>
    </>
  );
}
