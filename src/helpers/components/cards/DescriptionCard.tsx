import { hover_link, hover_red_dark, light_gray_bg } from "@/assets/colors";
import { span } from "@/assets/fonts";
import { CustomImage, CustomText } from "@/dynamic-imports/components";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { DescriptionCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function DescriptionCard(props: DescriptionCardSchema) {
  // Props
  const { color, title, slug, image1, description } = props;

  // Css
  const bgColor = color ?? light_gray_bg;
  const hoverColor = color ? hover_red_dark : hover_link;
  const titleCss = `${hoverColor} line-clamp-3 cursor-pointer tracking-wide`;
  const descCss = `line-clamp-4 tracking-wide`;

  return (
    <div
      className={`${bgColor} h-[260px] flex gap-3 justify-between items-start rounded-md border-[1px] border-gray-300 shadow-md`}
    >
      <CustomImage
        src={getAbiralImg(image1!)}
        alt={title?.slice(0, 18) ?? "Description Card Image"}
        divCss={`${span} font-medium w-[300px] h-full cursor-pointer rounded-md`}
        imgCss="w-full h-full object-cover rounded-l-md"
        width={40}
        height={40}
        onClick={() => window.open(slug)}
      />
      <div className="flex-1 h-full px-8 py-2 flex flex-col justify-center gap-6">
        <CustomText slug={slug} css={titleCss} isHeading isBold>
          {title}
        </CustomText>

        <CustomText css={descCss}>{description}</CustomText>
      </div>
    </div>
  );
}
