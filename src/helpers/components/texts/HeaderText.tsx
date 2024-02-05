import CustomText from "./CustomText";
import { TextSchema } from "@/utils/schemas/ComponentsSchema";

export default function HeaderText(props: TextSchema) {
  // props
  const { children, css, extendCss } = props;
  return (
    <CustomText
      css={css ?? `${extendCss} leading-[48px] md:leading-[72px]`}
      isHeaderColor
      isTitle
      isKhand
      isExtraBold
    >
      {children}
    </CustomText>
  );
}
