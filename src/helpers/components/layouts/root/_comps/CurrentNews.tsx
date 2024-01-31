"use client";

import * as styles from "@/assets/css/styles";
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import {
  CloseButton,
  CustomImage,
  CustomText,
} from "@/dynamic-imports/components";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/helpers/hooks/useStoreHooks";
import { clearIsCurrentNews } from "@/helpers/redux-app/news-portal/_actions";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import BodyOverlaySection from "@/helpers/components/sections/BodyOverlaySection";
import useScrollLock from "@/helpers/hooks/useScrollLock";
import { useEffect } from "react";

// This component will display individual current news data with a title and image (also will forward to a link)
const SingleCurrentNews = (props: ArticleSchema) => {
  // Props
  const { title, slug, image1 } = props;

  return (
    <div className="h-[80px] pl-0 md:pl-5 p-2 flex justify-between items-start rounded-md rounded-r-none md:border-r-2 md:border-red-400">
      <div className="flex w-4/5">
        <CustomText
          font={fonts.getFont("slight_para")}
          slug={slug}
          css="line-clamp-2"
        >
          {title}
        </CustomText>
      </div>
      <CustomImage
        src={image1!}
        alt={title.slice(0, 18)}
        divCss={`${fonts.span} font-medium w-1/5 h-[56px]`}
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
  const { lockScroll, unlockScroll } = useScrollLock();
  const { header } = useAppSelector((state: RootState) => state.NewsPortal);

  // Destructuring variables
  const { latest, trending } = header;
  const { is_latest, latest_data, latest_title } = latest;
  const { is_trending, trending_data, trending_title } = trending;

  // useEffect
  useEffect(() => {
    if (is_trending || is_latest) lockScroll();

    return () => unlockScroll();
  }, [is_latest, is_trending, lockScroll, unlockScroll]);

  // Return nothing if the condition is not satisfied
  if (!is_trending && !is_latest) return;

  // Else return the correct title and data
  const title = is_latest ? latest_title : is_trending ? trending_title : "";
  const data = is_latest ? latest_data : is_trending ? trending_data : [];

  // Css to handle scrollbar
  const scrollCss =
    data.length > 6
      ? "max-h-[calc(400px-80px-50px-24px)] overflow-y-scroll"
      : "";

  return (
    <>
      <BodyOverlaySection />
      <div
        className={`${styles.padding_x} z-drawer animate-slideDown py-[40px] bg-white absolute top-0 left-0 w-full h-[400px] shadow-md`}
      >
        {/* Header section */}
        <div
          className={`${colors.normal_border} animate-showDown bg red-300 w-full h-[50px] flex justify-between items-center border-b-[1px]`}
        >
          <CustomText
            font={`h-full ${colors.active_border} border-b-[3px]`}
            isSubTitle
            isTitleColor
            isKhand
          >
            {title}
          </CustomText>
          <CloseButton
            css={styles.current_news_close_button}
            onClick={() => dispatch(clearIsCurrentNews())}
          />
        </div>

        {/* Body section */}
        <div
          className={`${scrollCss} animate-showDown md:fourth-element-padding-0 w-full flex-1 p-3 pl-0 grid grid-cols-1 md:grid-cols-3`}
        >
          {data?.map((item: ArticleSchema, idx: number) => (
            <SingleCurrentNews key={getUniqueKey(idx, title!)} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
