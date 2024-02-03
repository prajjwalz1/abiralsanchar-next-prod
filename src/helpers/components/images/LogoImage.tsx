"use client";

import { CustomImage } from "@/dynamic-imports/components";
import { useRouter } from "next/navigation";

export default function LogoImage() {
  // Hooks
  const router = useRouter();

  // Action when logo is clicked
  return (
    <CustomImage
      src="/image/logo_full.png"
      alt="logo_full"
      divCss="w-[156px] h-9/12"
      width={100}
      height={100}
      priority
      onClick={() => router.push("/")}
    />
  );
}
