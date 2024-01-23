import * as colors from "@/assets/colors";
import { CustomTextSchema } from "@/utils/schemas/CommonSchema";
import { MouseEventHandler } from "react";

export default function CustomText(props: CustomTextSchema) {
  // Props
  const { css, font, slug, children } = props;

  // Actions
  const onClick: MouseEventHandler<HTMLParagraphElement> | undefined = slug
    ? () => window.open(slug)
    : undefined;

  // Css
  const newFont = font ?? "text-md font-medium";
  const defaultCss = `${colors.near_black} ${colors.hover_link} ${newFont} cursor-pointer`;
  const className = `${defaultCss} ${css ?? ""}`;

  // Text Props
  const textProps = { onClick, className, children };

  return <p {...textProps} />;
}
