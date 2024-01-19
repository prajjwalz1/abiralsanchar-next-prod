"use client";
// Assets
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import * as styles from "@/assets/css/styles";

import { navbar_menu_items } from "@/utils/constants/layouts-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { LinkSchema } from "@/utils/schemas/CommonSchema";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegNewspaper } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { Logo } from "@/dynamic-imports/components";

const LogoSection = () => {
  return (
    <div className={`${styles.paddingX} logo w-full h-[60px]`}>
      <Logo />
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav
      className={`navbar ${fonts.navbar} ${colors.navbar} ${styles.paddingX} flex flex-1 justify-between items-center gap-8`}
    >
      <div className="navbar-menu flex gap-8">
        {navbar_menu_items.map(({ label, href }: LinkSchema, idx: number) => (
          <Link
            key={getUniqueKey(idx, label)}
            href={href}
            className={`${colors.navbar_link} ${styles.getActiveLink(
              href === pathname,
              colors.sky
            )}`}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="navbar-icons flex items-center gap-5">
        <FaRegNewspaper className={`w-8 h-8 ${colors.icon}`} />
        <FiTrendingUp className={`w-8 h-8 ${colors.icon}`} />
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header max-h-[152px] py-4 flex flex-col">
      <LogoSection />
      <Navbar />
    </header>
  );
};

export default Header;
