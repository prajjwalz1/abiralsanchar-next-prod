import type { Metadata } from "next";
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { RootLayoutMetadata } from "@/utils/seo/metadatas/common";
import { rootLayoutCss } from "@/assets/css/styles/common";
import "./globals.css";

// Metadata for SEO
export const metadata: Metadata = RootLayoutMetadata;

// Styles
const { parent } = rootLayoutCss;

const RootLayout: React.FC<RootLayoutSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <html lang="en">
      <body style={parent}>{children}</body>
    </html>
  );
};

export default RootLayout;
