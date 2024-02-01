import { NewsCategorySection } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleCategorizedSchema } from "@/utils/schemas/ApiSchema";

export default function NewsCategoriesSection() {
  // Redux
  const { successResponse } = useAppSelector(
    (state: RootState) => state.NewsPortal.homepage_data
  );

  // Variables
  const newsCategoryData = successResponse?.data?.length
    ? successResponse?.data[4]?.articles_categorized?.category_article_data
    : [];

  return (
    <>
      {newsCategoryData?.map((item: ArticleCategorizedSchema, idx: number) => (
        <NewsCategorySection
          key={getUniqueKey(idx, item?.category_title)}
          {...item}
        />
      ))}
    </>
  );
}
