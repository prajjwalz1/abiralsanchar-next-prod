import { NewsCategorySection } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { destructHomepageData } from "@/utils/methods/reduxMethods";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ArticleCategorizedSchema } from "@/utils/schemas/ApiSchema";

export default function NewsCategoriesSection() {
  // Redux
  const { successResponse: h } = useAppSelector(
    (state: RootState) => state.NewsPortal.homepage_data
  );

  // Variables
  const category_article_data = destructHomepageData(h);

  return (
    <>
      {category_article_data?.map(
        (item: ArticleCategorizedSchema, idx: number) => (
          <NewsCategorySection
            key={getUniqueKey(idx, item?.category_title)}
            {...item}
          />
        )
      )}
    </>
  );
}
