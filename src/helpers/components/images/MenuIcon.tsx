import { menu_png } from "@/assets/images";
import { CustomImage } from "@/dynamic-imports/components";
import { OnClickSchema } from "@/utils/schemas/CommonSchema";

export default function MenuIcon(props: OnClickSchema) {
  return (
    <CustomImage
      src={menu_png}
      alt="menu_png"
      divCss="w-8 h-8 grayscale-[20%]"
      imgCss="hover:grayscale-100"
      {...props}
    />
  );
}
