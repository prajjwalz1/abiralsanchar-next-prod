"use client";

// Default imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

// Custom imports
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import * as styles from "@/assets/css/styles";
import { BodyOverlay, CloseButton } from "@/dynamic-imports/components";
import useScrollLock from "@/helpers/hooks/useScrollLock";
import {
  RootState,
  useAppSelector,
  useAppDispatch,
} from "@/helpers/hooks/useStoreHooks";
import { setMobileNavPopuup } from "@/helpers/redux-app/common/_actions";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { LinkSchema } from "@/utils/schemas/CommonSchema";
import { CommonNavMenuSchema } from "@/utils/schemas/LayoutSchema";
import LogoSection from "./LogoSection";

//////////////////////////////
// Common Navbar menu, for both desktop and mobile view
//////////////////////////////
const CommonNavMenu: React.FC<CommonNavMenuSchema> = (props) => {
  // Props
  const { css, isFlag } = props;

  // Redux
  const { homepage_data } = useAppSelector(
    (state: RootState) => state.NewsPortal
  );

  // Required variables
  const nav_items = homepage_data?.testResponse?.data[0].navbar_category;

  // Hooks
  const pathname = usePathname();

  return (
    <div className={css}>
      {nav_items?.map(({ title, slug }: LinkSchema, idx: number) => (
        <Link
          key={getUniqueKey(idx, title)}
          href={slug}
          className={`${colors.navbar_link} ${styles.getActiveLink(
            slug === pathname,
            colors.sky,
            isFlag
          )}`}
        >
          {title}
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
      ${styles.padding_xl} desktop-navbar-menu w-full h-full hidden lg:flex gap-8
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
        className={`${styles.margin_x} ${styles.nav_icon} lg:hidden w-full h-full`}
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
export default function Navbar() {
  return (
    <nav
      className={`${fonts.navbar} ${colors.navbar} navbar relative min-h-[132px] max-h-[132px] flex justify-between items-center gap-8`}
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
}
