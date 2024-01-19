"use client";
// Assets
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import * as styles from "@/assets/css/styles";

// Components
import { Logo } from "@/dynamic-imports/components";

// utils
import { navbar_menu_items } from "@/utils/constants/layouts-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { FlagSchema, LinkSchema } from "@/utils/schemas/CommonSchema";
import { CommonNavMenuSchema } from "@/utils/schemas/LayoutSchema";
import { useBoxVisible } from "@/helpers/hooks/useBoxVisible";

// Others
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

//////////////////////////////
// Logo
//////////////////////////////
const LogoSection: React.FC<FlagSchema> = (props) => {
  // Props
  const { isFlag } = props;

  // Css
  const padding = !isFlag ? styles.padding_x : "";
  const defaultCss = "logo w-full h-[60px] max-h-[60px]";
  const css = `${padding} ${defaultCss}`;

  return (
    <div className={css}>
      <Logo />
    </div>
  );
};

//////////////////////////////
// Common Navbar menu, for both desktop and mobile view
//////////////////////////////

const CommonNavMenu: React.FC<CommonNavMenuSchema> = (props) => {
  // Props
  const { css, isFlag } = props;

  // Hooks
  const pathname = usePathname();

  return (
    <div className={css}>
      {navbar_menu_items.map(({ label, href }: LinkSchema, idx: number) => (
        <Link
          key={getUniqueKey(idx, label)}
          href={href}
          className={`${colors.navbar_link} ${styles.getActiveLink(
            href === pathname,
            colors.sky,
            isFlag
          )}`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

//////////////////////////////
// Desktop navbar menu, Shown in large(lg) screens and above
//////////////////////////////
const DesktopNavMenu = () => (
  <CommonNavMenu
    css={`
      ${styles.padding_xl} desktop-navbar-menu hidden lg:flex gap-8
    `}
  />
);

//////////////////////////////
// Mobile navbar menu, Shown in medium(md) screens and below
//////////////////////////////
const MobileNavMenu = () => {
  // Hooks
  const { domRef, isBoxVisible, setIsBoxVisible } = useBoxVisible();

  return (
    <>
      <CgMenuGridR
        onClick={() => setIsBoxVisible(true)}
        className={`${styles.margin_x} ${styles.nav_icon} lg:hidden`}
      />

      {isBoxVisible && (
        <div
          ref={domRef}
          className={`${styles.padding_x} ${styles.logo_padding_y} fixed top-0 left-0 bg-white min-h-screen min-w-[280px]`}
        >
          <AiOutlineClose
            className="absolute top-4 right-4"
            onClick={() => setIsBoxVisible(false)}
          />
          <LogoSection isFlag />
          <CommonNavMenu
            css="mobile-navbar-menu flex flex-col lg:hidden gap-4"
            isFlag
          />
        </div>
      )}
    </>
  );
};

//////////////////////////////
// Mobile navbar, Shown in medium(md) screens and below
//////////////////////////////
const Navbar = () => {
  return (
    <nav
      className={`${fonts.navbar} ${colors.navbar} navbar relative flex flex-1 justify-between items-center gap-8`}
    >
      <DesktopNavMenu />
      <MobileNavMenu />
      <div
        className={`${styles.padding_xr} navbar-icons flex items-center gap-5`}
      >
        <FaRegNewspaper className={styles.nav_icon} />
        <FiTrendingUp className={styles.nav_icon} />
      </div>
    </nav>
  );
};

//////////////////////////////
// Header, The main header component
//////////////////////////////
const Header = () => {
  return (
    <header className="header max-h-[152px] py-4 flex flex-col">
      <LogoSection />
      <Navbar />
    </header>
  );
};

export default Header;
