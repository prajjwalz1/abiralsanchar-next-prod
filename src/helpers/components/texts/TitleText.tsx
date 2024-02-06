import { ChildrenSchema, SlugSchema } from "@/utils/schemas/CommonSchema";
import CustomText from "./CustomText";

export interface TitlTextSchema extends ChildrenSchema, SlugSchema {}

export default function TitleText({ children, ...rest }: TitlTextSchema) {
  return (
    <CustomText
      isBold
      isTitle
      css="hover:text-brand-blue cursor-pointer leading-8 sm:leading-tight"
      {...rest}
    >
      {children}
    </CustomText>
  );
}
