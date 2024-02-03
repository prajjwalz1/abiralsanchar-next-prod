import { CustomImageSchema } from "@/utils/schemas/CommonSchema";
import Image from "next/image";

export default function CustomImage(props: CustomImageSchema) {
  // Props
  const { src, alt, divCss, imgCss, blurDataURL, priority, ...rest } = props;

  // Default Blur Image
  const defaultBlurImg =
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cPNmPQAIBgMD669M5AAAAABJRU5ErkJggg==";

  return (
    <div className={divCss ?? "w-full h-full"}>
      <Image
        priority={priority}
        className={imgCss ?? "w-full h-full object-cover rounded-md"}
        src={src}
        alt={alt}
        // fill={rest.height ? false : true}
        // layout="responsive"
        // placeholder={ ? "empty" : "blur"}
        // placeholder="blur"
        blurDataURL={blurDataURL ?? defaultBlurImg}
        {...rest}
      />
    </div>
  );
}
