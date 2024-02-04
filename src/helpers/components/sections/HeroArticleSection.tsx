import { black } from "@/assets/colors";
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
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { FiMessageSquare } from "react-icons/fi";

export default function HeroArticleSection(props: ArticleSchema) {
  // Props
  const { author, description, title, slug, image1, updated_at } = props;

  return (
    <div className="w-full py-5 flex flex-col items-center gap-1">
      <CustomTag status="error" title="उपेन्द्र सीके टकराव" />

      <div className="flex flex-col items-center gap-1">
        {/* Title of the article section */}
        <TitleText>{title}</TitleText>

        {/* Author details for the article */}
        <div className="author-details w-full flex justify-between sm:justify-center items-center gap-1.5 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <CustomImage
              priority
              src="https://www.onlinekhabar.com/wp-content/uploads/2022/09/Shailendra-Mahato-1-270x170.jpg"
              alt={author.toString()}
              divCss="w-[40px] h-[40px] rounded-full"
              imgCss="object-cover w-[40px] h-[40px] rounded-full"
              width={40}
              height={40}
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
      <div className="w-full flex flex-col gap-5">
        <CustomImage
          src={getAbiralImg(image1!)}
          alt={title ?? "hero_description_image"}
          divCss="w-full h-[208px] md:h-[424px] rounded-md shadow-md border-[1px] border-gray-200"
          imgCss="object-cover w-full h-full rounded-md"
          width={100}
          height={100}
          onClick={() => window.open(slug)}
        />
        <CustomText font={fonts.large} css="line-clamp-3">
          {description}
        </CustomText>
      </div>
    </div>
  );
}
