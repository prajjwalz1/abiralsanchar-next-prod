import * as fonts from "@/assets/fonts";
import {
  CustomImage,
  CustomText,
  TimeCard,
} from "@/dynamic-imports/components";
import { MediaCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function MediaCard(props: MediaCardSchema) {
  // Props
  const { title, time, slug, info_placing, titleLineClamp: t, image1 } = props;

  // Line clamp
  const titleLineClamp = t ? `line-clamp-${t}` : "line-clamp-3";

  // Css
  const titleCss = `${fonts.slight_large_line_height} ${titleLineClamp} cursor-pointer tracking-wide`;

  return (
    <div className="h-[84px] flex gap-3 justify-between items-start rounded-sm">
      <CustomImage
        src={image1!}
        alt={title!.slice(0, 18)}
        divCss={`${fonts.span} font-medium w-[120px] h-full cursor-pointer rounded-md`}
        imgCss="w-full h-full object-cover rounded-md"
        width={40}
        height={40}
        onClick={() => window.open(slug)}
      />
      <div
        className={`${
          info_placing ?? "justify-between"
        } h-full flex-1 flex flex-col gap-1`}
      >
        <CustomText slug={slug} css={titleCss} isLinkColor>
          {title}
        </CustomText>
        {time && <TimeCard title={time} font={fonts.getFont("small")} />}
      </div>
    </div>
  );
}
