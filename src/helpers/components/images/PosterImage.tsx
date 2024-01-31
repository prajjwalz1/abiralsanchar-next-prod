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
import { PosterImageSchema } from "@/utils/schemas/ComponentsSchema";
import { useState } from "react";

export default function PosterImage(props: PosterImageSchema) {
  // Props
  const { tag, time, title, titleFont, timeFont, isTransparent, isZoomable } =
    props;

  // State
  const [zoomImg, setZoomImg] = useState("");

  // Css variables
  const newTitleFont = titleFont ?? fonts.getFont("sub_title", "extra_bold");
  const newTimeFont = timeFont ?? fonts.getFont("slight_para");
  const color = colors.white;
  const zoom = isZoomable ? zoomImg : "";

  // Title css
  const titleCss = `${color} ${newTitleFont} tracking-wider`;

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
        src="https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg"
        alt="main alt"
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
        <CustomText css={titleCss}>{title}</CustomText>
        {time && (
          <TimeCard {...{ font: newTimeFont, color }} title={time} isFlag />
        )}
      </div>
    </div>
  );
}
