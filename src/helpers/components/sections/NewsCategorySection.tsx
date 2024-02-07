import { rGap, rMarginTop } from "@/assets/css/styles";
import {
  AdsSection,
  BannerImage,
  CenterContainer,
  CustomText,
  DescriptionCard,
  HeaderText,
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
    articles.length > 2 ? "md:items-end" : "md:items-start";
  const articles1 = articles?.slice(0, 3);
  const articles2 = articles?.slice(3, 6);
  const a1Css = css(articles1);
  const a2Css = css(articles2);

  return (
    <>
      <BannerImage imageProps={banners.samachar_section} />

      <div className={`${rGap} md:grid md:grid-cols-[auto_280px]`}>
        {/* First column */}
        <div className="flex flex-col">
          <HeaderText>{category_title}</HeaderText>

          <DescriptionCard {...articles[0]} />

          {isNoArticles ? (
            <CenterContainer
              css={`
                ${rMarginTop} w-full h-auto md:h-[calc(100%-260px-72px-20px)] grid place-items-center bg-white rounded-md shadow-md p-8 md:p-0
              `}
            >
              <CustomText>हाल देखाउनको लागि कुनै लेखहरू छैनन्।</CustomText>
            </CenterContainer>
          ) : (
            <div className="h-fit md:h-[calc(100%-260px-72px)] max-h-[calc(100%-260px-72px)] flex flex-col sm:flex-row gap-3">
              <div
                className={`${a1Css} flex flex-col basis-1/2 pt-4 md:pt-3 md:grid md:grid-rows-3 gap-3`}
              >
                {articles1?.map((item: MediaCardSchema, idx: number) => (
                  <MediaCard
                    {...item}
                    key={getUniqueKey(idx, item.title!)}
                    extendCss="h-[104px]"
                    info_placing="justify-center"
                  />
                ))}
              </div>
              <div
                className={`${a2Css} flex flex-col basis-1/2 md:pt-3 md:grid md:grid-rows-3 gap-3`}
              >
                {articles2?.map((item: MediaCardSchema, idx: number) => (
                  <MediaCard
                    {...item}
                    key={getUniqueKey(idx, item.title!)}
                    extendCss="h-[104px]"
                    info_placing="justify-center"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Second column */}
        <div className="h-full hidden lg:flex flex-col justify-between pt-5 gap-4 ">
          <AdsSection imgList={ads_section.news} />
        </div>
      </div>
    </>
  );
}
