import { CustomImage } from "@/dynamic-imports/components";
import { FlagSchema } from "@/utils/schemas/CommonSchema";

export default function MiniLogoImage(props: FlagSchema) {
  // Props
  const { isFlag } = props;

  // Css
  const absoluteCss =
    "animate-showDown absolute left-10 md:left-32 lg:left-[172px] w-[40px] h-[24px]";
  const css = "w-[40px] h-[24px]";
  const divCss = isFlag ? css : absoluteCss;

  return (
    <CustomImage
      priority
      src="/image/logo_small.png"
      alt="logo_small"
      divCss={divCss}
      width={40}
      height={24}
    />
  );
}
