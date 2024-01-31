import {
  AdsSection,
  BannerImage,
  CustomText,
  DescriptionCard,
  MediaCard,
} from "@/dynamic-imports/components";
import { adsSection, banners } from "@/utils/constants/homepage-constants";

export default function SamacharSection() {
  const descProps = {
    title: "अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्न ध्यानाकर्षण",
    description:
      "१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2024/01/Hospital-Managment-768x468.jpg",
  };

  const mediaProps = {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  };

  return (
    <>
      <BannerImage imageProps={banners.samachar_section} />

      <div className="pb-5 grid grid-cols-[1fr_280px] gap-6">
        <div className="flex flex-col first:gap-0 gap-6">
          <CustomText isHeaderColor isMainTitle isKhand isExtraBold>
            समाचार
          </CustomText>

          <DescriptionCard {...descProps} />

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
            <MediaCard {...mediaProps} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-between pt-5 gap-4">
          <AdsSection imgList={adsSection.news} />
        </div>
      </div>
    </>
  );
}
