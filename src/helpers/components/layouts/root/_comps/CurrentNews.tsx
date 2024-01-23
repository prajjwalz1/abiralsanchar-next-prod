"use client";

import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import { CloseButton, CustomImage } from "@/dynamic-imports/components";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { LinkImageSchema } from "@/utils/schemas/CommonSchema";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/helpers/hooks/useStoreHooks";
import { clearIsCurrentNews } from "@/helpers/redux-app/news-portal/_actions";

// This component will display individual current news data with a title and image (also will forward to a link)
const SingleCurrentNews = (props: LinkImageSchema) => {
  // Props
  const { title, slug, img } = props;

  return (
    <div className="h-[80px] p-5 flex justify-between items-center rounded-md rounded-r-none border-r-2 border-red-400">
      <div className="flex w-4/5">
        <p onClick={() => window.open(slug)}>{title}</p>
      </div>
      <CustomImage
        {...img}
        divCss="w-1/5 h-[56px]"
        imgCss="w-full h-full object-cover rounded-md"
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
    <div
      className={`${styles.padding_x} py-[40px] bg-white absolute top-0 left-0 w-full h-[400px] shadow-md`}
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
        {data?.map((item: any, idx: number) => (
          <SingleCurrentNews key={getUniqueKey(idx, title)} {...item} />
        ))}
      </div>
    </div>
  );
}
