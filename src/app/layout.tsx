import type { Metadata } from "next";
import { rootLayoutCss } from "../../assets/css/styles/common";
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import "./globals.css";
import { RootLayoutMetadata } from "@/utils/seo/metadatas/common";

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
