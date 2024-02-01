import { ThreeColumnSection } from "@/dynamic-imports/components";
import { RootState, useAppSelector } from "@/helpers/hooks/useStoreHooks";
import { highlight_arr } from "@/utils/constants/homepage-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { ThreeColumnSectionSchema } from "@/utils/schemas/ComponentsSchema";

export default function HighlightSection() {
  // Redux
  const { latest, trending } = useAppSelector(
    (state: RootState) => state.NewsPortal.header
  );

  return (
    <>
      {highlight_arr(latest, trending)?.map(
        (item: ThreeColumnSectionSchema, idx: number) => (
          <ThreeColumnSection key={getUniqueKey(idx, item.title!)} {...item} />
        )
      )}
    </>
  );
}
