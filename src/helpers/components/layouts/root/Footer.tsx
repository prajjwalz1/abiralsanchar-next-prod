import * as fonts from "@/assets/fonts";
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
        className={`${styles.paddingX} footer-menu grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5`}
      >
        {footer_menu_items.map(
          ({ label, child }: NestedLinkSchema, idx: number) => (
            <div key={getUniqueKey(idx, label)} className="flex flex-col gap-4">
              <p className={fonts.footer_menu_title}>{label}</p>

              <div className="pb-10 flex flex-col gap-1">
                {child.map(({ label, href }: LinkSchema, idx: number) => (
                  <Link
                    key={getUniqueKey(idx, label)}
                    href={href}
                    className={fonts.footer_menu_para}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div
        className={`${colors.footer_end} ${styles.paddingX} footer-end py-10 flex-1 flex flex-col lg:flex-row gap-5 lg:gap-1`}
      >
        <div className="logo">
          <Logo />
        </div>

        <div className="footer-end grid grid-cols-[auto_auto] md:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto_auto] gap-4 items-center divide-x divide-gray-400">
          {footer_end_items.map(
            ({ label, icon, value }: OptionSchema, idx: number) => (
              <div
                key={getUniqueKey(idx, value)}
                className="first:px-0 px-4 flex flex-col gap-1"
              >
                <div className="">{label !== "copyright" ? label : icon}</div>
                <div className="">{value}</div>
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
