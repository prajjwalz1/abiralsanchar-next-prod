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
      className={`${styles.width_x} ${styles.padding_x} featured-highlights thin-scrollbar overflow-x-auto relative flex items-center gap-4 sm:gap-6`}
    >
      {featured_data
        ?.slice(0, 9)
        ?.map(({ title, image1, slug }: ArticleSchema, idx: number) => (
          <div
            key={getUniqueKey(idx, title!)}
            className="min-w-[84px] flex items-center gap-1"
          >
            <CustomImage
              priority
              src={getAbiralImg(image1!)}
              alt={title ?? "featured_image_avatar"}
              divCss="w-[24px] h-[24px] rounded-full border-[1px] border-black"
              imgCss="w-full h-full object-cover rounded-full"
              width={24}
              height={24}
              onClick={() => window.open(slug)}
            />
            <CustomText isKhand isBold>
              {title.slice(0, 10)}
            </CustomText>
          </div>
        ))}
      <Divider />
    </div>
  );
}
