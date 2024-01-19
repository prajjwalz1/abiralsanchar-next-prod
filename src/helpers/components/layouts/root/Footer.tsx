import * as fonts from "@/assets/fonts/font";
import * as colors from "@/assets/colors/color";
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

const Footer = () => {
  return (
    <footer className={`${colors.footer} footer pt-10 flex flex-col`}>
      <div className={`footer-menu px-32 grid grid-cols-5`}>
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
        className={`${colors.footer_end} footer-end px-32 flex-1 grid grid-cols-[150px_auto_auto_auto_auto_auto] auto-cols-max items-center divide-x divide-gray-400`}
      >
        <div className="px-4">Logo</div>
        {footer_end_items.map(
          ({ label, icon, value }: OptionSchema, idx: number) => (
            <div
              key={getUniqueKey(idx, value)}
              className="px-4 flex flex-col gap-1"
            >
              <div className="">{label !== "copyright" ? label : icon}</div>
              <div className="">{value}</div>
            </div>
          )
        )}
      </div>
    </footer>
  );
};

export default Footer;
