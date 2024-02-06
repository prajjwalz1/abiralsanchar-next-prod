import { black } from "@/assets/colors";
import { rPaddingT } from "@/assets/css/styles";
import * as fonts from "@/assets/fonts";
import {
  CustomTag,
  CustomText,
  TimeCard,
  TitleText,
} from "@/dynamic-imports/components";
import CustomImage from "@/helpers/components/images/CustomImage";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { getRelativeTime } from "@/utils/methods/timeMethods";
import { HeroArticleSectionSchema } from "@/utils/schemas/ComponentsSchema";
import { FiMessageSquare } from "react-icons/fi";

export default function HeroArticleSection(props: HeroArticleSectionSchema) {
  // Props
  const { author, description, title, slug, image1, updated_at, isFlag } =
    props;

  return (
    <div
      className={`${rPaddingT} w-full flex flex-col items-center gap-1 md:gap-2`}
    >
      <CustomTag status="error" title="उपेन्द्र सीके टकराव" />

      <div className="flex flex-col gap-0 items-center">
        {/* Title of the article section */}
        <TitleText>{title}</TitleText>

        {/* Author details for the article */}
        <div className="author-details w-full flex justify-between sm:justify-center items-center gap-1.5 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <CustomImage
              priority
              src="https://www.onlinekhabar.com/wp-content/uploads/2022/09/Shailendra-Mahato-1-270x170.jpg"
              alt={author?.toString()}
              divCss="w-[40px] h-[40px] rounded-full"
              imgCss="object-cover w-[40px] h-[40px] rounded-full"
              width={40}
              height={40}
              isFlag={isFlag}
            />
            <CustomText>{author}</CustomText>
          </div>
          <TimeCard title={getRelativeTime(updated_at)} color={black} isFlag />

          {/* Comments section */}
          <div className="flex items-center gap-1">
            <FiMessageSquare />
            <CustomText>२</CustomText>
          </div>
        </div>
      </div>

      {/* Content description */}
      <div className="w-full flex flex-col gap-3 sm:gap-5">
        <CustomImage
          src={getAbiralImg(image1!)}
          alt={title ?? "hero_description_image"}
          divCss="w-full h-[208px] md:h-[424px] rounded-md shadow-md"
          imgCss="object-cover w-full h-full rounded-md"
          width={100}
          height={100}
          onClick={() => window.open("/article")}
          isFlag={isFlag}
        />
        <CustomText css={!isFlag ? "line-clamp-3" : ""}>
          {description}
        </CustomText>
      </div>
    </div>
  );
}
