"use client";

// Custom imports
import * as styles from "@/assets/css/styles";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { CustomImage, CustomText, Divider } from "@/dynamic-imports/components";
import { getAbiralImg } from "@/utils/methods/imgMethods";

export default function FeaturedHighlights() {
  // Redux
  const { featured_data } = useAppSelector(
    (state: RootState) => state.NewsPortal.header.featured
  );

  return (
    <div
      className={`${styles.width_x} featured-highlights relative thin-scrollbar overflow-x-auto overflow-y-hidden mx-auto flex items-center gap-8`}
    >
      {featured_data?.map(
        ({ title, image1, slug }: ArticleSchema, idx: number) => (
          <div key={getUniqueKey(idx, title!)} className="flex gap-1">
            <CustomImage
              src={getAbiralImg(image1!)}
              alt={slug}
              divCss="w-[24px] h-[24px] rounded-full border-[1px] border-black"
              imgCss="w-full h-full object-cover rounded-full"
              width={24}
              height={24}
              onClick={() => window.open(slug)}
            />
            <CustomText font="font-medium" isKhand>
              {title.slice(0, 10)}
            </CustomText>
          </div>
        )
      )}
      <Divider />
    </div>
  );
}
