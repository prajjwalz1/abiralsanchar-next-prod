import { ChildrenSchema } from "@/utils/schemas/CommonSchema";

export default function BodyOverlay(props: ChildrenSchema) {
  // Props
  const { children } = props;

  // Css
  const css = "z-app_bar fixed top-0 left-0 w-screen min-h-screen bg-black/40";

  return <div className={css}>{children}</div>;
}
