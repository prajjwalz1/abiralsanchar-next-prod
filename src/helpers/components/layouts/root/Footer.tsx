"use client";

import * as colors from "@/assets/colors";
import * as styles from "@/assets/css/styles";
import {
  footer_end_items,
  footer_menu_items,
} from "@/utils/constants/layouts-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import {
  LinkSchema,
  NestedLinkSchema,
  OptionSchema,
} from "@/utils/schemas/CommonSchema";
import {
  CustomText,
  LogoImage,
  SubHeadingText,
} from "@/dynamic-imports/components";

const Footer = () => {
  return (
    <footer className={`${colors.footer} footer pt-10 flex flex-col`}>
      <div
        className={`${styles.padding_x} footer-menu grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5`}
      >
        {footer_menu_items.map(
          ({ title, child }: NestedLinkSchema, idx: number) => (
            <div
              key={getUniqueKey(idx, title!)}
              className="flex flex-col gap-2"
            >
              <SubHeadingText>{title}</SubHeadingText>

              <div className="pb-10 flex flex-col gap-1">
                {child.map(({ title, slug }: LinkSchema, idx: number) => (
                  <CustomText
                    key={getUniqueKey(idx, title!)}
                    slug={slug!}
                    isLinkColor
                  >
                    {title}
                  </CustomText>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div
        className={`${colors.light_blue_bg} ${styles.padding_x} footer-end py-10 flex-1 flex flex-col xl:flex-row gap-5 xl:gap-1`}
      >
        <div className="logo">
          <LogoImage />
        </div>

        <div className="footer-end w-full grid grid-cols-1 sm:grid-cols-[auto_auto_auto] md:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto] xl:grid-cols-[auto_auto_auto_auto_auto] 2xl:grid-cols-5 gap-4 items-center divide-x divide-gray-400">
          {footer_end_items.map(
            ({ label, icon, value }: OptionSchema, idx: number) => {
              const isCopyright = label === "copyright";
              const newLabel = !isCopyright ? label : icon;

              return (
                <div
                  key={getUniqueKey(idx, value)}
                  className="px-2.5 flex flex-col gap-1 justify-between h-full border-l-[1px] border-l-gray-400"
                >
                  {!isCopyright ? (
                    <CustomText isSlightPara>{newLabel}</CustomText>
                  ) : (
                    newLabel
                  )}
                  <CustomText isSlightPara>{value}</CustomText>
                </div>
              );
            }
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
