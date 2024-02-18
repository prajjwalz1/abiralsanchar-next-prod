import { PosterImage } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { destructHomepageData } from "@/utils/methods/reduxMethods";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { PosterImageSchema } from "@/utils/schemas/ComponentsSchema";

export type NavbarTextTooltipSchema = {
  category_title: string;
};

const NavbarTextTooltip = (props: NavbarTextTooltipSchema) => {
  // Props
  const { category_title } = props;

  // Redux
  // const dispatch = useAppDispatch();
  const { homepage_data: h } = useAppSelector(
    (state: RootState) => state.NewsPortal
  );
  const category_article_data = destructHomepageData(h?.successResponse);

  const chosen_article = category_article_data?.find(
    (item: any) => item.category_title === category_title
  );

  console.log("chosen_article", chosen_article);

  //
  return (
    <div className="w-full bg-white text-black p-10">
      {chosen_article?.articles?.map((item: PosterImageSchema, idx: number) => {
        console.log("item", item);
        return (
          <div key={getUniqueKey(idx, "NavbarTextTooltip Poster Image")}>
            {/* <PosterImage {...item} /> */}
            <PosterImage {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default NavbarTextTooltip;
