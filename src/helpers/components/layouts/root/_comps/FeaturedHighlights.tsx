"use client";

// Custom imports
import * as styles from "@/assets/css/styles";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/helpers/hooks/useStoreHooks";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { CustomImage, CustomText } from "@/dynamic-imports/components";

export default function FeaturedHighlights() {
  // Redux
  const dispatch = useAppDispatch();
  const { featured_data } = useAppSelector(
    (state: RootState) => state.NewsPortal.header.featured
  );

  return (
    <div
      className={`${styles.padding_xl} featured-higlights w-full h-full flex items-center gap-8 border-b-[1px]`}
    >
      {featured_data.map(
        ({ title, image1, slug }: ArticleSchema, idx: number) => (
          <div key={getUniqueKey(idx, title)} className="flex gap-1">
            <CustomImage
              src={image1!}
              alt={title}
              divCss="w-[24px] h-[24px] rounded-full"
              imgCss="w-full h-full object-cover rounded-full"
              width={24}
              height={24}
              onClick={() => window.open(slug)}
            />
            <CustomText>{title}</CustomText>
          </div>
        )
      )}
    </div>
  );
}
