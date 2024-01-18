import type { Metadata } from "next";
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { RootLayoutMetadata } from "@/utils/seo/metadatas/common";
import { rootLayoutCss } from "@/assets/css/styles/common";
import "./globals.css";
import { RootFooter, RootHeader } from "@/dynamic-imports/components";

// Metadata for SEO
export const metadata: Metadata = RootLayoutMetadata;

// Styles
const { parent } = rootLayoutCss;

const RootLayout: React.FC<RootLayoutSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <html lang="en">
      <body style={parent}>
        <div className="bg-red-100 min-w-screen min-h-screen max-w-[2000px] mx-auto grid grid-rows-[144px_minmax(calc(100vh-144px),auto)_400px]">
          <RootHeader />
          <main>{children}</main>
          <RootFooter />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
