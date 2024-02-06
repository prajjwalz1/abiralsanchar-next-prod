import { MediaCard } from "@/dynamic-imports/components";
import { testArticle } from "@/utils/data/backend_data";
import HeaderText from "../../texts/HeaderText";
import { rGap } from "@/assets/css/styles";

export default function SimilarNewsSection() {
  return (
    <div className="w-full h-full flex flex-col">
      <HeaderText>सम्बन्धित खबर</HeaderText>

      <div className={`${rGap} grid grid-cols-3`}>
        <MediaCard {...testArticle} isColumn />
        <MediaCard {...testArticle} isColumn />
        <MediaCard {...testArticle} isColumn />
        <MediaCard {...testArticle} isColumn />
        <MediaCard {...testArticle} isColumn />
        <MediaCard {...testArticle} isColumn />
      </div>
    </div>
  );
}
