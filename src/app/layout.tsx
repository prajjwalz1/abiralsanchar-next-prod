// assets
import "@/assets/css/globals.css";
import * as fonts from "@/assets/fonts";

// default imports
import { Metadata } from "next";

// custom imports
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { RootFooter, RootHeader } from "@/dynamic-imports/components";
import { RootLayoutMetadata } from "@/utils/seo/metadatas";

// SEO Metadata for Home
export const metadata: Metadata = RootLayoutMetadata;

const RootLayout: React.FC<RootLayoutSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/logo_small.png" type="image/png" />
      </head>
      <body className={`${fonts.khand.variable} ${fonts.mukta.variable}`}>
        <RootHeader />
        <main>{children}</main>
        <RootFooter />
      </body>
    </html>
  );
};

export default RootLayout;
