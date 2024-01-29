import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import { CustomTextSchema } from "@/utils/schemas/CommonSchema";
import { MouseEventHandler } from "react";

export default function CustomText(props: CustomTextSchema) {
  // Props
  const { css, font, isLink, isKhand, slug, children } = props;

  // Actions
  const onClick: MouseEventHandler<HTMLParagraphElement> | undefined = slug
    ? () => window.open(slug)
    : undefined;

  // Css
  const newFont = font ?? `${fonts.paragraph} font-medium`;
  const defaultCss = `${colors.near_black} ${newFont}`;
  const fontFamily = isKhand ? "font-khand" : "font-mukta";
  const linkCss = isLink ? `${colors.hover_link} cursor-pointer` : "";
  const className = `${defaultCss} ${fontFamily} ${linkCss} ${css ?? ""}`;

  // Text Props
  const textProps = { onClick, className, children };

  return <p {...textProps} />;
}
