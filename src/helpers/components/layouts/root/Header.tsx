"use client";

// Default imports

// Custom imports
import { LogoSection, Navbar } from "@/dynamic-imports/components";
import { ReduxProvider } from "@/dynamic-imports/redux-app";

//////////////////////////////
// Header, The main header component
//////////////////////////////
export default function Header() {
  return (
    <ReduxProvider>
      <header className="header text-green-400 min-h-[100rem] flex flex-col">
        <LogoSection /> {/* Height = 60px */}
        <Navbar />
      </header>
    </ReduxProvider>
  );
}
