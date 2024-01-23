import Image from "next/image";

export type CustomImageSchema = {
  src: string;
  alt: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
  divCss?: string;
  imgCss?: string;
  blurDataURL?: string;
};

export default function CustomImage(props: CustomImageSchema) {
  // Props
  const { src, alt, width, height, divCss, imgCss, blurDataURL, ...rest } =
    props;

  // Default Blur Image
  const defaultBlurImg =
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cPNmPQAIBgMD669M5AAAAABJRU5ErkJggg==";

  return (
    <div className={divCss ?? "w-full h-full"}>
      <Image
        priority
        className={imgCss ?? "w-full h-full object-cover"}
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={blurDataURL || defaultBlurImg}
        {...rest}
      />
    </div>
  );
}
