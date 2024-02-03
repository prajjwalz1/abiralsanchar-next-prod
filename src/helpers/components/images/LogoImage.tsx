import { CustomImage } from "@/dynamic-imports/components";

export default function LogoImage() {
  return (
    <CustomImage
      src="/image/logo_full.png"
      alt="logo_full"
      divCss="w-[156px] h-9/12"
      width={100}
      height={100}
      priority
    />
  );
}
