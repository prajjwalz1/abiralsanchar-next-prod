import { imgTransition } from "@/assets/css/styles";
import { CustomImageSchema } from "@/utils/schemas/CommonSchema";
import Image from "next/image";
import { useState } from "react";

export default function CustomImage(props: CustomImageSchema) {
  // Props
  const {
    src,
    alt,
    divCss,
    imgCss,
    blurDataURL,
    priority,
    isFlag,
    onClick,
    isZoomable,
    ...rest
  } = props;

  // State to store the image zoom info
  const [zoomImg, setZoomImg] = useState("");

  // Default Blur Image
  const defaultBlurImg =
    "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cPNmPQAIBgMD669M5AAAAABJRU5ErkJggg==";

  // Action when image is clicked
  const handleImageClick = () => {
    isFlag || (onClick && onClick());
  };

  // Action when the mouse enters the div
  const onMouseEnter = () => {
    setZoomImg(`${imgTransition} scale-110 overflow-hidden`);
  };

  const onMouseLeave = () => {
    setZoomImg(imgTransition);
  };

  // Custom props
  const zoomProps = { onMouseEnter, onMouseLeave };

  // Css
  const zoom = isZoomable ? zoomImg : "";
  const defaultDivCss = "w-full h-full overflow-hidden";
  const finalDivCss = divCss
    ? `${zoom} ${divCss} overflow-hidden`
    : `${zoom} ${defaultDivCss}`;
  const defaultImgCss = "w-full h-full object-cover rounded-md";
  const finalImgCss = imgCss ? `${zoom} ${imgCss}` : `${zoom} ${defaultImgCss}`;

  return (
    <div className={finalDivCss} {...zoomProps}>
      <Image
        priority={priority}
        className={finalImgCss}
        src={src}
        alt={alt}
        // fill={rest.height ? false : true}
        // layout="responsive"
        // placeholder={ ? "empty" : "blur"}
        // placeholder="blur"
        blurDataURL={blurDataURL ?? defaultBlurImg}
        onClick={handleImageClick}
        {...rest}
      />
    </div>
  );
}
