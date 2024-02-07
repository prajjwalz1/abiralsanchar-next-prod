import { MediaCard } from "@/dynamic-imports/components";
import HeaderText from "../../texts/HeaderText";
import { rGap } from "@/assets/css/styles";
import { ArticleSchema } from "@/utils/schemas/ApiSchema";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { CommonNewsSectionSchema } from "@/utils/schemas/CommonSchema";

export default function SimilarNewsSection(props: CommonNewsSectionSchema) {
  // Props
  const { title, articles } = props;

  return (
    <div className="w-full h-full flex flex-col">
      <HeaderText>{title ?? "सम्बन्धित खबर"}</HeaderText>

      <div className={`${rGap} grid grid-cols-1 md:grid-cols-3`}>
        {articles?.map((item: ArticleSchema, idx: number) => (
          <MediaCard key={getUniqueKey(idx, item.title!)} {...item} isColumn />
        ))}
      </div>
    </div>
  );
}
