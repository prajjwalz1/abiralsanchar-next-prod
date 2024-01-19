"use client";
import * as colors from "@/assets/colors/color";
import * as fonts from "@/assets/fonts/font";
import { getActiveLink } from "@/assets/css/styles/common";
import { navbar_items } from "@/utils/constants/layouts-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { LinkSchema } from "@/utils/schemas/CommonSchema";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LogoSection = () => {
  return (
    <div className="px-12 w-full h-[60px]">
      <h1 className="text-3xl">Logo</h1>
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav
      className={`${fonts.navbar} ${colors.navbar} px-12 flex flex-1 space-between items-center gap-8`}
    >
      {navbar_items.map(({ label, href }: LinkSchema, idx: number) => (
        <Link
          key={getUniqueKey(idx, label)}
          href={href}
          className={`${colors.navbar_link} ${getActiveLink(
            href === pathname,
            colors.sky
          )}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

const Header = () => {
  return (
    <header className="max-h-[152px] py-4 flex flex-col">
      <LogoSection />
      <Navbar />
    </header>
  );
};

export default Header;
