import { CustomImage } from "@/dynamic-imports/components";
import { BannerSectionSchema } from "@/utils/schemas/CommonSchema";

export default function BannerSection(props: BannerSectionSchema) {
  // Props
  const { imageProps, divProps } = props;

  return (
    <div className="banner-section py-5">
      {imageProps && <CustomImage {...imageProps} />}
      {divProps && <div>div</div>}
    </div>
  );
}
