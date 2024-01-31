import { hover_link, hover_red_dark, light_gray_bg } from "@/assets/colors";
import { span } from "@/assets/fonts";
import { CustomImage, CustomText } from "@/dynamic-imports/components";
import { DescriptionCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function DescriptionCard(props: DescriptionCardSchema) {
  // Props
  const { color, title, slug, image1, description } = props;

  // Css
  const bgColor = color ?? light_gray_bg;
  const hoverColor = color ? hover_red_dark : hover_link;
  const titleCss = `${hoverColor} line-clamp-3 cursor-pointer tracking-wide`;
  const descCss = `line-clamp-6 tracking-wide`;

  return (
    <div
      className={`${bgColor} h-[360px] flex gap-3 justify-between items-start rounded-md`}
    >
      <CustomImage
        src={image1!}
        alt={title!.slice(0, 18)}
        divCss={`${span} font-medium w-[300px] h-full cursor-pointer rounded-md`}
        imgCss="w-full h-full object-cover rounded-l-md"
        width={40}
        height={40}
        onClick={() => window.open(slug)}
      />
      <div className="flex-1 h-full p-8 flex flex-col justify-center gap-6">
        <CustomText slug={slug} css={titleCss} isHeading isBold>
          {title}
        </CustomText>

        <CustomText css={descCss}>{description}</CustomText>
      </div>
    </div>
  );
}
