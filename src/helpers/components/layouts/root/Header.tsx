"use client";

// Default imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

// Custom imports
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import * as styles from "@/assets/css/styles";
import { CloseButton, Logo } from "@/dynamic-imports/components";
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import {
  useAppSelector,
  RootState,
  useAppDispatch,
} from "@/helpers/hooks/useStoreHooks";
import { setMobileNavPopuup } from "@/helpers/redux-app/common/_actions";
import { navbar_menu_items } from "@/utils/constants/layouts-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { FlagSchema, LinkSchema } from "@/utils/schemas/CommonSchema";
import { CommonNavMenuSchema } from "@/utils/schemas/LayoutSchema";
import { useEffect } from "react";
import useScrollLock from "@/helpers/hooks/useScrollLock";
import BodyOverlay from "../../sections/BodyOverlay";

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
  // Redux
  const dispatch = useAppDispatch();
  const { is_mobile_menu } = useAppSelector(
    (state: RootState) => state.Global.layouts.menu
  );

  // Hooks
  const { lockScroll, unlockScroll } = useScrollLock();

  // useEffect
  useEffect(
    () => (is_mobile_menu ? lockScroll() : unlockScroll()),
    [is_mobile_menu, lockScroll, unlockScroll]
  );

  return (
    <>
      <CgMenuGridR
        onClick={() => dispatch(setMobileNavPopuup(true))}
        className={`${styles.margin_x} ${styles.nav_icon} lg:hidden`}
      />

      {is_mobile_menu && <BodyOverlay />}

      {is_mobile_menu && (
        <div
          className={`${styles.padding_x} ${styles.logo_padding_y} z-drawer fixed top-0 left-0 bg-white min-h-screen min-w-[280px]`}
        >
          <CloseButton onClick={() => dispatch(setMobileNavPopuup(false))} />
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
    <ReduxProvider>
      <header className="header max-h-[152px] py-4 flex flex-col">
        <LogoSection />
        <Navbar />
      </header>
    </ReduxProvider>
  );
};

export default Header;
