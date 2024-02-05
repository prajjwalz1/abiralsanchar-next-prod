import { CustomImage } from "@/dynamic-imports/components";
import { BannerImageSchema } from "@/utils/schemas/CommonSchema";

export default function BannerImage(props: BannerImageSchema) {
  // Props
  const { imageProps, divProps, css, extendCss } = props;

  return (
    <div className={css ?? `${extendCss} rounded-md shadow-md`}>
      {imageProps && <CustomImage {...imageProps} priority />}
      {divProps && <div>div</div>}
    </div>
  );
}
