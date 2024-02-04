import { ChildrenSchema } from "@/utils/schemas/CommonSchema";
import CustomText from "./CustomText";

export default function HeaderText({ children }: ChildrenSchema) {
  return (
    <CustomText css="leading-[72px]" isHeaderColor isTitle isKhand isExtraBold>
      {children}
    </CustomText>
  );
}
