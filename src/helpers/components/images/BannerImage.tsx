import { CustomImage } from "@/dynamic-imports/components";
import { BannerImageSchema } from "@/utils/schemas/CommonSchema";

export default function BannerImage(props: BannerImageSchema) {
  // Props
  const { imageProps, divProps, css } = props;

  return (
    <div className={css ?? "py-5"}>
      {imageProps && <CustomImage {...imageProps} />}
      {divProps && <div>div</div>}
    </div>
  );
}
