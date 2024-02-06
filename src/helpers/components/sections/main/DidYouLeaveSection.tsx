import { rGap } from "@/assets/css/styles";
import { getFont } from "@/assets/fonts";
import { HeaderText, PosterImage } from "@/dynamic-imports/components";
import { testArticle } from "@/utils/data/backend_data";

export default function DidYouLeaveSection() {
  const commonProps = {
    titleFont: getFont("body", "semi_bold"),
    isTransparent: true,
  };
  return (
    <div className="w-full h-full">
      <HeaderText>छुटाउनुभयो कि ?</HeaderText>

      <div className={`${rGap} grid grid-cols-2 sm:grid-cols-4 h-[300px]`}>
        <PosterImage {...testArticle} {...commonProps} />
        <PosterImage {...testArticle} {...commonProps} />
        <PosterImage {...testArticle} {...commonProps} />
        <PosterImage {...testArticle} {...commonProps} />
      </div>
    </div>
  );
}
