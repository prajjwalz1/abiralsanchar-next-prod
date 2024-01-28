import "@/assets/css/globals.css";
import * as fonts from "@/assets/fonts";
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { RootFooter, RootHeader } from "@/dynamic-imports/components";
import { RootLayoutMetadata } from "@/utils/seo/metadatas";
import { Metadata } from "next";

// SEO Metadata for Home
export const metadata: Metadata = RootLayoutMetadata;

const RootLayout: React.FC<RootLayoutSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <html lang="en">
      <body
        className={`${fonts.khand.variable} ${fonts.mukta.variable} min-w-screen min-h-screen max-w-[2000px] mx-auto grid grid-rows-[160px_minmax(calc(100vh-160px),auto)_auto] font-normal tracking-wide`}
      >
        <RootHeader /> {/* Height of header = 160px */}
        <main>{children}</main>
        <RootFooter />
      </body>
    </html>
  );
};

export default RootLayout;
