import * as colors from "@/assets/colors";
import { CustomTextSchema } from "@/utils/schemas/CommonSchema";
import { MouseEventHandler } from "react";

export default function CustomText(props: CustomTextSchema) {
  // Props
  const { css, slug, title, children } = props;

  // Actions
  const onClick: MouseEventHandler<HTMLParagraphElement> | undefined = slug
    ? () => window.open(slug)
    : undefined;

  // Css
  const defaultCss = `${colors.near_black} ${colors.hover_link} font-medium cursor-pointer`;
  const className = `${defaultCss} ${css ?? ""}`;

  // Text Props
  const textProps = { onClick, className, children };

  return <p {...textProps} />;
}
