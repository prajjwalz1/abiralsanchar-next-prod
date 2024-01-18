import type { Metadata } from "next";
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { RootLayoutMetadata } from "@/utils/seo/metadatas/common";
import { rootLayoutCss } from "@/assets/css/styles/common";
import { RootFooter, RootHeader } from "@/dynamic-imports/components";
import "@/styles/globals.css";
import Header from "../helpers/components/layouts/root/Header";

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
        <div className="min-w-screen min-h-screen max-w-[2000px] mx-auto grid grid-rows-[144px_minmax(calc(100vh-144px),auto)_400px]">
          <RootHeader />
          <Header />
          <main>{children}</main>
          <RootFooter />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
