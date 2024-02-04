import { ChildrenSchema } from "@/utils/schemas/CommonSchema";
import CustomText from "./CustomText";

export default function TitleText({ children }: ChildrenSchema) {
  return (
    <CustomText isBold isTitle>
      {children}
    </CustomText>
  );
}
