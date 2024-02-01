"use client";

import * as colors from "@/assets/colors";
import { imgTransition } from "@/assets/css/styles";
import * as fonts from "@/assets/fonts";
import {
  BodyOverlay,
  CustomImage,
  CustomTag,
  CustomText,
  TimeCard,
} from "@/dynamic-imports/components";
import { getAbiralImg } from "@/utils/methods/imgMethods";
import { getRelativeTime } from "@/utils/methods/timeMethods";
import { PosterImageSchema } from "@/utils/schemas/ComponentsSchema";
import { useState } from "react";

export default function PosterImage(props: PosterImageSchema) {
  // Props
  const {
    tag,
    image1,
    title,
    titleFont,
    timeFont,
    updated_at,
    isTransparent,
    isZoomable,
  } = props;

  // State
  const [zoomImg, setZoomImg] = useState("");

  // Css variables
  const newTitleFont = titleFont ?? fonts.getFont("sub_title", "extra_bold");
  const newTimeFont = timeFont ?? fonts.getFont("slight_para");
  const color = colors.white;
  const zoom = isZoomable ? zoomImg : "";

  // Title css
  const titleCss = `${color} tracking-wide`;

  // Action when the mouse enters the div
  const handleMouseEnter = () => {
    setZoomImg(`${imgTransition} scale-110 overflow-hidden`);
  };

  const handleMouseLeave = () => {
    setZoomImg(imgTransition);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-full max-h-full flex flex-col justify-end rounded-md overflow-hidden"
    >
      {isTransparent && (
        <BodyOverlay css="z-minus_1 absolute w-full min-h-full rounded-md" />
      )}
      <CustomImage
        src={getAbiralImg(image1!)}
        alt={title!}
        divCss={`${zoom} z-minus_10 absolute w-full h-full rounded-md`}
        imgCss="w-full h-full object-cover rounded-md"
        width={100}
        height={100}
      />
      <div className="p-5">
        {tag && (
          <div className="w-full flex justify-center items-center">
            <CustomTag title={tag} status="error" />
          </div>
        )}
        <CustomText font={newTitleFont} css={titleCss}>
          {title}
        </CustomText>
        {updated_at && (
          <TimeCard
            {...{ font: newTimeFont, color }}
            title={getRelativeTime(updated_at)}
            isFlag
          />
        )}
      </div>
    </div>
  );
}
