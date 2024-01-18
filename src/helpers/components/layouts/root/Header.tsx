import { navbar_font } from "@/assets/fonts/font";
import { navbar_items } from "@/utils/constants/layouts-constants";
import { getUniqueKey } from "@/utils/methods/stringMethods";
import { LinkSchema } from "@/utils/schemas/CommonSchema";
import Link from "next/link";

const LogoSection = () => {
  return (
    <div className="px-12 w-full h-[60px]">
      <h1 className="text-3xl">Logo</h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav
      className={`${navbar_font} px-12 flex flex-1 space-between items-center gap-5 bg-blue-400`}
    >
      {navbar_items.map(({ label, href }: LinkSchema, idx: number) => (
        <Link key={getUniqueKey(idx, label)} href={href}>
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
