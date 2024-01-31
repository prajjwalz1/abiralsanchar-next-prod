import { black } from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import { CustomTag, CustomText, TimeCard } from "@/dynamic-imports/components";
import CustomImage from "@/helpers/components/images/CustomImage";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { FiMessageSquare } from "react-icons/fi";

export default function HeroArticleSection(props: ArticleSchema) {
  // Props
  const { author, description, title, slug, image1 } = props;

  return (
    <div className="w-full py-5 flex flex-col items-center gap-5">
      <CustomTag status="error" title="उपेन्द्र सीके टकराव" />

      <div className="flex flex-col items-center gap-1">
        {/* Title of the article section */}
        <CustomText isBold isTitle>
          {title}
        </CustomText>

        {/* Author details for the article */}
        <div className="author-details w-full flex justify-between sm:justify-center items-center gap-1.5 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <CustomImage
              src="https://www.onlinekhabar.com/wp-content/uploads/2022/09/Shailendra-Mahato-1-270x170.jpg"
              alt={author.toString()}
              divCss="w-[40px] h-[40px] rounded-full"
              imgCss="object-cover w-full h-full rounded-full"
              width={40}
              height={40}
            />
            <CustomText>{author}</CustomText>
          </div>
          <TimeCard title="८ घन्टा अगाडि" color={black} isFlag />
          <div className="flex items-center gap-1">
            <FiMessageSquare />
            <CustomText>२</CustomText>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5">
        <CustomImage
          src={getAbiralImg(image1!)}
          alt={title}
          divCss="w-full bg-red-300 h-[520px] rounded-md border-[1px] border-black"
          imgCss="object-cover w-full h-full rounded-md"
          width={520}
          height={520}
          onClick={() => window.open(slug)}
        />
        <CustomText font={fonts.large} css="line-clamp-3">
          {description}
        </CustomText>
      </div>
    </div>
  );
}
