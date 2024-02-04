import { ChildrenSchema } from "@/utils/schemas/CommonSchema";
import CustomText from "./CustomText";

export default function SubHeadingText({ children }: ChildrenSchema) {
  return (
    <CustomText isKhand isHeaderColor isSubHeading isBold>
      {children}
    </CustomText>
  );
}
