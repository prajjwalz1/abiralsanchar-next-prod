import { CustomImage } from "@/dynamic-imports/components";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import {
  CustomImageSchema,
  ImageArrSchema,
} from "@/utils/schemas/CommonSchema";

export default function AdsSection({ imgList }: ImageArrSchema) {
  return (
    <div className="hidden xl:flex xl:flex-col xl:gap-5 xl:justify-between">
      {imgList?.map((item: CustomImageSchema, idx: number) => (
        <CustomImage
          {...item}
          priority
          key={getUniqueKey(idx, item.alt)}
          divCss="w-full h-[155px] rounded-md shadow-md"
          imgCss="w-full h-full object-cover rounded-md"
          width={0}
          height={0}
        />
      ))}
    </div>
  );
}
