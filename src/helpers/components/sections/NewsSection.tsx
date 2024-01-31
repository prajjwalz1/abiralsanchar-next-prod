import { header } from "@/assets/colors";
import { CustomText } from "@/dynamic-imports/components";

export default function NewsSection() {
  return (
    <div className="bg-green-400">
      <CustomText css={header} isMainTitle>
        समाचार
      </CustomText>
    </div>
  );
}
