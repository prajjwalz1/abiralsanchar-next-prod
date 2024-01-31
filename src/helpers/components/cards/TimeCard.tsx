import { CustomText } from "@/dynamic-imports/components";
import { TimeCardSchema } from "@/utils/schemas/ComponentsSchema";
import { LuClock4 } from "react-icons/lu";

export default function TimeCard(props: TimeCardSchema) {
  // Props
  const { title, font, isFlag } = props;

  const mb = isFlag ? "mb-0.5" : "";

  return (
    <div className="flex items-center gap-1">
      <LuClock4 className={`${font} ${mb}`} />
      <CustomText font={font}>{title}</CustomText>
    </div>
  );
}
