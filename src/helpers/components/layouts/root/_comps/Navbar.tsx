"use client";

// Default imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { IoTrendingUpOutline } from "react-icons/io5";
import { PiNewspaperClippingLight } from "react-icons/pi";

// Custom imports
import * as colors from "@/assets/colors";
import * as fonts from "@/assets/fonts";
import * as styles from "@/assets/css/styles";
import {
  BodyOverlaySection,
  CloseButton,
  CustomImage,
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
import LogoSection from "./LogoSection";
import CurrentNews from "./CurrentNews";
import { setIsCurrentNews } from "@/helpers/redux-app/news-portal/_actions";
import useCustomScroll from "@/helpers/hooks/useCustomScroll";
import { next_svg } from "@/assets/images";
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
  const nav_from_api =
    homepage_data?.testResponse?.data[0].navbar_category ?? [];

  if (nav_from_api.length) {
    nav_items.push(...nav_from_api);
  }

  // Hooks
  const pathname = usePathname();

  return (
    <div className={css}>
      {isFixed && (
        <CustomImage
          src={next_svg}
          alt="test-logo"
          width={24}
          height={24}
          divCss="animate-showDown absolute left-10 md:left-32 lg:left-[172px] w-[24px] h-[24px]"
        />
      )}
      {nav_items?.map(({ title, slug }: LinkSchema, idx: number) => (
        <Link
          key={getUniqueKey(idx, title)}
          href={slug!}
          className={styles.getActiveLink(
            slug === pathname,
            colors.sky,
            isFlag
          )}
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
const DesktopNavMenu = () => {
  // Hooks
  const { isFixed } = useCustomScroll(80);

  // Css
  const defaultCss = `
  ${styles.padding_xl} desktop-navbar-menu hidden lg:flex gap-8`;
  const animation = isFixed ? "ml-[48px] animate-slideRightMiniLogo" : "";
  const css = `${defaultCss} ${animation}`;

  return <CommonNavMenu css={css} />;
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
      <CgMenuGridR
        onClick={() => dispatch(setMobileNavPopuup(true))}
        className={`${styles.margin_x} ${styles.nav_icon} lg:hidden`}
      />

      {is_mobile_menu && <BodyOverlaySection />}

      {is_mobile_menu && (
        <div
          className={`${styles.padding_x} ${styles.logo_padding_y} z-drawer fixed top-0 left-0 bg-white min-h-screen min-w-[280px] flex flex-col gap-3`}
        >
          <CloseButton onClick={() => dispatch(setMobileNavPopuup(false))} />
          <LogoSection isFlag />
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

  // Hooks
  const { scrollCss } = useCustomScroll(80);

  // useEffect
  useEffect(() => {
    dispatch(GetHomepageDataThunk());
  }, [dispatch]);

  return (
    <nav
      className={`${fonts.navbar} ${colors.navbar} navbar z-drawer h-[50px] ${scrollCss} navbar flex justify-between items-center gap-8`}
    >
      <DesktopNavMenu />
      <MobileNavMenu />
      <div
        className={`${styles.padding_xr} navbar-icons flex items-center gap-3`}
      >
        <PiNewspaperClippingLight
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
