import { BannerImage } from "@/dynamic-imports/components";
import { banners } from "@/utils/constants/homepage-constants";

export default function BusinessSection() {
  return (
    <>
      <BannerImage imageProps={banners.business_section} />
      BusinessSection
    </>
  );
}
