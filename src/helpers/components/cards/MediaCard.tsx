import * as fonts from "@/assets/fonts";
import {
  CustomImage,
  CustomText,
  TimeCard,
} from "@/dynamic-imports/components";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { getRelativeTime } from "@/utils/methods/timeMethods";
import { MediaCardSchema } from "@/utils/schemas/ComponentsSchema";

export default function MediaCard(props: MediaCardSchema) {
  // Props
  const {
    title,
    updated_at,
    slug,
    info_placing,
    titleLineClamp: t,
    image1,
    showClock,
    css,
  } = props;

  // Line clamp
  const titleLineClamp = t ? `line-clamp-${t}` : "line-clamp-3";

  // Css
  const divCss = css ?? "h-[84px]";
  const titleCss = `${fonts.slight_large_line_height} ${titleLineClamp} cursor-pointer tracking-wide`;
  const placingCss = info_placing ?? "justify-between";

  return (
    <div
      className={`${divCss} flex gap-3 justify-between items-start rounded-sm`}
    >
      <CustomImage
        src={getAbiralImg(image1!)}
        alt={title?.slice(0, 18) ?? "media_card_img"}
        divCss={`${fonts.span} font-medium w-[120px] h-full cursor-pointer rounded-md`}
        imgCss="w-full h-full object-cover rounded-md"
        width={40}
        height={40}
        onClick={() => window.open(slug)}
      />
      <div className={`${placingCss} h-full flex-1 flex flex-col gap-1`}>
        <CustomText slug={slug} css={titleCss} isLinkColor>
          {title}
        </CustomText>
        {showClock && (
          <TimeCard
            title={getRelativeTime(updated_at!)}
            font={fonts.getFont("small")}
          />
        )}
      </div>
    </div>
  );
}
