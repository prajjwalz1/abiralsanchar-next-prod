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
import Link from "next/link";
import { Logo } from "@/dynamic-imports/components";

const Footer = () => {
  return (
    <footer className={`${colors.footer} footer pt-10 flex flex-col`}>
      <div
        className={`${styles.padding_x} footer-menu grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5`}
      >
        {footer_menu_items.map(
          ({ title, child }: NestedLinkSchema, idx: number) => (
            <div key={getUniqueKey(idx, title)} className="flex flex-col gap-4">
              <p className={styles.footer_menu_title}>{title}</p>

              <div className="pb-10 flex flex-col gap-1">
                {child.map(({ title, slug }: LinkSchema, idx: number) => (
                  <Link
                    key={getUniqueKey(idx, title)}
                    href={slug!}
                    className={styles.footer_menu_para}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div
        className={`${colors.footer_end} ${styles.padding_x} footer-end py-10 flex-1 flex flex-col xl:flex-row gap-5 xl:gap-1`}
      >
        <div className="logo">
          <Logo />
        </div>

        <div className="footer-end grid grid-cols-1 sm:grid-cols-[auto_auto_auto] md:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto] xl:grid-cols-[auto_auto_auto_auto_auto] gap-4 items-center divide-x divide-gray-400">
          {footer_end_items.map(
            ({ label, icon, value }: OptionSchema, idx: number) => {
              const isCopyright = label === "copyright";
              const newLabel = isCopyright ? icon : label;
              const valueCss = isCopyright ? "text-xs" : "text-sm";
              return (
                <div
                  key={getUniqueKey(idx, value)}
                  className="px-2.5 flex flex-col gap-1 border-l-[1px] border-l-gray-400"
                >
                  <div className="">{newLabel}</div>
                  <div className={valueCss}>{value}</div>
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
