import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { CustomImageSchema } from "@/utils/schemas/CommonSchema";
import { ReactNode } from "react";

export type NewsCategorySectionSchema = {
  title: string;
  banner_img: CustomImageSchema;
  newsChildren: ArticleSchema[];
  highlightChildren: ReactNode;
};

export default function NewsCategorySection() {
  // Redux
  const { successResponse } = useAppSelector(
    (state: RootState) => state.NewsPortal.homepage_data
  );

  // Variables
  const newsCategoryData = successResponse?.data?.length
    ? successResponse?.data[4]
    : [];

  console.log(newsCategoryData);

  // const categories_arr = [
  //   {
  //     title:
  //   }
  // ]
  // // Variables
  // const title = "समाचार";
  // const bannerImg = banners.samachar_section;
  // const descProps = samachar_desc;

  // const newsChildren = samachar_children;

  // const highlightChildren = <AdsSection imgList={ads_section.news} />;

  // Custom Props
  // const samacharProps = {
  //   title,
  //   bannerImg,
  //   descProps,
  //   newsChildren,
  //   highlightChildren,
  // };

  const twoChildrenProps = {};

  return <></>;
}
