import * as colors from "@/assets/colors";
import { CustomText } from "@/dynamic-imports/components";
import { TimeCardSchema } from "@/utils/schemas/ComponentsSchema";
import { LuClock4 } from "react-icons/lu";

export default function TimeCard(props: TimeCardSchema) {
  // Props
  const { css, title, font, isFlag } = props;

  // Css
  const mb = isFlag ? "mb-0.5" : "";
  const className = `${css ?? ""} ${colors.dark_gray}`;

  return (
    <div className="flex items-center gap-1">
      <LuClock4 className={`${font} ${mb}`} />
      <CustomText font={font} css={className}>
        {title}
      </CustomText>
    </div>
  );
}
