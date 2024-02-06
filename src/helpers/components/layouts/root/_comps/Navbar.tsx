"use client";

// Default imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { IoTrendingUpOutline } from "react-icons/io5";
import { TbNews } from "react-icons/tb";

// Custom imports
import * as styles from "@/assets/css/styles";
import {
  BodyOverlay,
  CloseButton,
  MiniLogoImage,
  NavbarText,
} from "@/dynamic-imports/components";
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
import RootLayoutLogo from "./RootLayoutLogo";
import CurrentNews from "./CurrentNews";
import { setIsCurrentNews } from "@/helpers/redux-app/news-portal/_actions";
import useCustomScroll from "@/helpers/hooks/useCustomScroll";
import { GetHomepageDataThunk } from "@/helpers/redux-app/news-portal/_thunks";

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

  // Hooks
  const { isFixed } = useCustomScroll(80);

  // Required variables
  let nav_items = [{ title: "होमपेज", slug: "/" }];
  const data = homepage_data?.successResponse?.data;
  const nav_from_api = data && data.length ? data[0]?.navbar_category : [];

  if (nav_from_api && nav_from_api.length) {
    nav_items.push(...nav_from_api);
  }
  // Hooks
  const pathname = usePathname();

  return (
    <div className={css}>
      {isFixed && <MiniLogoImage />}
      {nav_items?.map(({ title, slug }: LinkSchema, idx: number) => (
        <Link key={getUniqueKey(idx, title!)} href={slug!}>
          <NavbarText isSameLink={slug === pathname} isFlag={isFlag}>
            {title}
          </NavbarText>
        </Link>
      ))}
    </div>
  );
};

//////////////////////////////
// Desktop navbar menu, Shown in large(lg) screens and above
//////////////////////////////
const DesktopNavMenu = () => {
  // Hooks
  const { isFixed } = useCustomScroll(80);

  // Css
  const defaultCss = `
  ${styles.padding_xl} desktop-navbar-menu hidden lg:flex lg:items-center gap-8`;
  const animation = isFixed ? "ml-[56px] animate-slideRightMiniLogo" : "";
  const css = `${defaultCss} ${animation}`;

  return <CommonNavMenu css={css} isFlag />;
};
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
      <div
        className={`${styles.margin_xl} py-5 flex lg:hidden items-center gap-2`}
      >
        <MiniLogoImage
          isFlag
          onClick={() => dispatch(setMobileNavPopuup(true))}
        />
      </div>

      {is_mobile_menu && <BodyOverlay />}

      {is_mobile_menu && (
        <div
          className={`${styles.padding_x} ${styles.logo_padding_y} z-drawer fixed top-0 left-0 bg-white min-h-screen min-w-[280px] flex flex-col gap-3`}
        >
          <CloseButton
            extendCss="top-9 right-6 text-2xl"
            onClick={() => dispatch(setMobileNavPopuup(false))}
          />
          <RootLayoutLogo isFlag />
          <CommonNavMenu
            css="mobile-navbar-menu flex flex-col lg:hidden gap-3"
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
  // Redux
  const dispatch = useAppDispatch();
  const didMountRef = useRef(false);

  // Hooks
  const css = `fixed transition delay-150 duration-300 ease-in-out top-0 w-full max-w-[2000px]`;
  const { isFixed, scrollCss } = useCustomScroll(80, css);

  // useEffect
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      dispatch(GetHomepageDataThunk());
    }
  }, [dispatch]);

  // Other css
  const shadow = isFixed ? "shadow-md" : "";

  return (
    <nav
      className={`${scrollCss} ${shadow} bg-brand-blue text-xl navbar z-drawer h-[50px] navbar flex justify-between items-center gap-8`}
    >
      <DesktopNavMenu />
      <MobileNavMenu />
      <div
        className={`${styles.padding_xr} navbar-icons flex items-center gap-3`}
      >
        <TbNews
          className={styles.nav_icon}
          onClick={() => dispatch(setIsCurrentNews("latest"))}
        />

        <IoTrendingUpOutline
          className={styles.nav_icon}
          onClick={() => dispatch(setIsCurrentNews("trending"))}
        />
        <CurrentNews />
      </div>
    </nav>
  );
}
