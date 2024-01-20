// Default imports

// Custom imports
import * as styles from "@/assets/css/styles";
import { Logo } from "@/dynamic-imports/components";
import { FlagSchema } from "@/utils/schemas/CommonSchema";

export default function LogoSection(props: FlagSchema) {
  // Props
  const { isFlag } = props;

  // Css
  const padding = !isFlag ? styles.padding_x : "";
  const defaultCss = "logo w-full h-[60px] max-h-[60px] flex items-center";
  const css = `${padding} ${defaultCss}`;

  return (
    <div className={css}>
      <Logo />
    </div>
  );
}
