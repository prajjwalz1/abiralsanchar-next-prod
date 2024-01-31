import * as fonts from "@/assets/fonts";
import { CustomTag, CustomText, TimeCard } from "@/dynamic-imports/components";
import CustomImage from "@/helpers/components/images/CustomImage";
import { FiMessageSquare } from "react-icons/fi";

export default function HeroArticleSection() {
  return (
    <div className={"w-full py-5 flex flex-col items-center gap-5"}>
      {/* Category/Tag section */}

      <CustomTag status="error" title="उपेन्द्र सीके टकराव" />

      <div className="flex flex-col items-center gap-1">
        {/* Title of the article section */}
        <CustomText isBold isTitle>
          मधेश सरकार छाडेको जनमत आन्दोलनको मुडमा
        </CustomText>

        {/* Author details for the article */}
        <div className="author-details w-full flex justify-between sm:justify-center items-center gap-1.5 sm:gap-6">
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
          <TimeCard title="८ घन्टा अगाडि" isFlag />
          <div className="flex items-center gap-1">
            <FiMessageSquare />
            <CustomText>२</CustomText>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <CustomImage
          src={
            "https://www.onlinekhabar.com/wp-content/uploads/2024/01/Newroad-No-Parking-6.jpg"
          }
          alt="Author image"
          divCss="w-full h-[520px] rounded-md"
          imgCss="object-cover w-full h-full rounded-md"
          width={3000}
          height={520}
        />
        <CustomText font={fonts.large} css="line-clamp-3">
          ९ माघ, काठमाडौं । काठमाडौं महानगरपालिकाले मंगलबारदेखि न्यूरोड
          क्षेत्रमा पार्किङ निषेध गरेपछि व्यवसायीले पसल बन्द गरेर २ घण्टा सडकमा
          प्रदर्शन गरे । निर्णय नसच्याए निरन्तर आन्दोलन गर्ने चेतावनी दिएका
          उनीहरुले आफूहरुलाई विस्थापित गरेर खाडी, मलेसिया पठाउन महानगर उद्धत
          भएको आरोप पनि लगाए । महानगर प्रहरी बलका प्रमुख राजुनाथ खाडी, मलेसिया
          पठाउन महानगर उद्धत भएको आरोप पनि लगाए । महानगर प्रहरी बलका मलेसिया
          पठाउन महानगर उद्धत भएको आरोप पनि लगाए । महानगर प्रहरी बलकामलेसिया
          पठाउन महानगर उद्धत भएको आरोप पनि लगाए । महानगर प्रहरी बलकामलेसिया
          पठाउन महानगर उद्धत भएको आरोप पनि लगाए । महानगर प्रहरी बलका प्रमुख
          राजुनाथ पाण्डेका
        </CustomText>
      </div>
    </div>
  );
}
