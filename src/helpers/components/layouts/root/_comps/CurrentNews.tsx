"use client";

import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import { CloseButton, CustomImage } from "@/dynamic-imports/components";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/helpers/hooks/useStoreHooks";
import { clearIsCurrentNews } from "@/helpers/redux-app/news-portal/_actions";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import BodyOverlay from "@/helpers/components/sections/BodyOverlay";

// This component will display individual current news data with a title and image (also will forward to a link)
const SingleCurrentNews = (props: ArticleSchema) => {
  // Props
  const { title, slug, image1 } = props;

  return (
    <div className="h-[80px] p-5 flex justify-between items-center rounded-md rounded-r-none border-r-2 border-red-400">
      <div className="flex w-4/5">
        <p
          onClick={() => window.open(slug)}
          className={`${fonts.paragraph} font-medium line-clamp-2`}
        >
          {title}
        </p>
      </div>
      <CustomImage
        src={image1!}
        alt={title}
        divCss="w-1/5 h-[56px] font-medium"
        imgCss="w-full h-full object-cover rounded-md"
        width={40}
        height={40}
        onClick={() => window.open(slug)}
      />
    </div>
  );
};

// This component is responsible for displaying either the trending/latest news.
// Depending upon the icon button clicked in the right side of navbar
export default function CurrentNews() {
  // Redux
  const dispatch = useAppDispatch();
  const { header } = useAppSelector((state: RootState) => state.NewsPortal);

  // Destructuring variables
  const { latest, trending } = header;
  const { is_latest, latest_data, latest_title } = latest;
  const { is_trending, trending_data, trending_title } = trending;

  // Return nothing if the condition is not satisfied
  if (!is_trending && !is_latest) return;

  // Else return the correct title and data
  const title = is_latest ? latest_title : is_trending ? trending_title : "";
  const data = is_latest ? latest_data : is_trending ? trending_data : [];

  return (
    <>
      <BodyOverlay />
      <div
        className={`${styles.padding_x} z-drawer py-[40px] bg-white absolute top-0 left-0 w-full h-[400px] shadow-md`}
      >
        {/* Header section */}
        <div
          className={`${colors.normal_border} bg red-300 w-full h-[50px] flex justify-between items-center border-b-[1px]`}
        >
          <p
            className={`${fonts.sub_title_bold} h-full ${colors.title} ${colors.active_border} border-b-[3px]`}
          >
            {title}
          </p>
          <CloseButton
            css={styles.current_news_close_button}
            onClick={() => dispatch(clearIsCurrentNews())}
          />
        </div>

        {/* Body section */}
        <div className="fourth-element-padding-0 w-full flex-1 p-3 pl-0 grid grid-cols-3 max-h-[calc(400px-80px-50px-24px)] overflow-y-scroll">
          {data?.map((item: ArticleSchema, idx: number) => (
            <SingleCurrentNews key={getUniqueKey(idx, title)} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
