import * as fonts from "@/assets/fonts";
import * as styles from "@/assets/css/styles";
import { CustomText } from "@/dynamic-imports/components";
import CustomImage from "@/helpers/components/images/CustomImage";
import { LuClock4 } from "react-icons/lu";

export default function HeroArticle() {
  return (
    <div
      className={`${styles.padding_x_medium} w-full py-5 flex flex-col items-center gap-5`}
    >
      {/* Category/Tag section */}
      <div className="w-fit px-2.5 py-0.5 bg-red-600 text-white rounded-md">
        उपेन्द्र सीके टकराव
      </div>

      {/* Author details */}
      <div className="flex flex-col gap-1">
        {/* Title of the article section */}
        <CustomText font={fonts.title_bold}>
          मधेश सरकार छाडेको जनमत आन्दोलनको मुडमा
        </CustomText>

        {/* Author details for the article */}
        <div className="author-details flex justify-center items-center gap-6">
          <div className="flex items-center gap-1.5">
            <CustomImage
              src={
                "https://www.onlinekhabar.com/wp-content/uploads/2022/09/Shailendra-Mahato-1-270x170.jpg"
              }
              alt="Author image"
              divCss="w-[40px] h-[40px] rounded-full"
              imgCss="object-cover w-full h-full rounded-full"
              width={40}
              height={40}
            />
            <CustomText>शैलेन्द्र महतो</CustomText>
          </div>

          <div className="flex gap-1 items-center">
            <LuClock4 />
            <CustomText>८ घन्टा अगाडि</CustomText>
          </div>
        </div>
      </div>
    </div>
  );
}
