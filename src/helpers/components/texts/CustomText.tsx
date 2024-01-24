import * as colors from "@/assets/colors";
import { CustomTextSchema } from "@/utils/schemas/CommonSchema";
import { MouseEventHandler } from "react";

export default function CustomText(props: CustomTextSchema) {
  // Props
  const { css, font, isLink, slug, children } = props;

  // Actions
  const onClick: MouseEventHandler<HTMLParagraphElement> | undefined = slug
    ? () => window.open(slug)
    : undefined;

  // Css
  const newFont = font ?? "text-md font-medium";

  const defaultCss = `${colors.near_black} ${newFont}`;

  const linkCss = isLink ? `${colors.hover_link} cursor-pointer` : "";

  const className = `${defaultCss} ${linkCss} ${css ?? ""}`;

  // Text Props
  const textProps = { onClick, className, children };

  return <p {...textProps} />;
}
